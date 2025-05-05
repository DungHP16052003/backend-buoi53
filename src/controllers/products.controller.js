const express = require("express");
const fs = require("fs").promises;

const DB_PATH = "./db.json";
const RESOURCE = "products";

// Write DB
const writeDb = async (resource, data) => {
  let db = {};
  try {
    const jsonDb = await fs.readFile(DB_PATH, "utf-8");
    db = JSON.parse(jsonDb);
  } catch (error) {}

  db[resource] = data;

  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
};

// Read DB
const readDb = async (resource) => {
  try {
    const jsonDb = await fs.readFile(DB_PATH, "utf-8");
    const db = JSON.parse(jsonDb) ?? {};
    return db[resource] ?? [];
  } catch (error) {
    return [];
  }
};

const router = express.Router();
const index = async (req, res) => {
  const products = await readDb(RESOURCE);
  console.log(products);

  res.json({
    status: "success",
    data: products,
  });
};

const show = async (req, res) => {
  const products = await readDb(RESOURCE);
  const product = products.find((product) => product.id === +req.params.id);

  if (!product) {
    res.status(404).json({
      status: "error",
      message: "Resource notfound.",
    });
    return;
  }

  res.json({
    status: "success",
    data: product,
  });
};

const store = async (req, res) => {
  const products = await readDb(RESOURCE);
  const nextId = (products.at(-1)?.id ?? 0) + 1;
  const product = {
    ...req.body,
    id: nextId,
  };

  products.push(product);

  await writeDb(RESOURCE, products);

  res.status(201).json({
    status: "success",
    data: product,
  });
};

const update = async (req, res) => {
  const products = await readDb(RESOURCE);
  const product = products.find((product) => product.id === +req.params.id);

  if (!product) {
    res.status(404).json({
      status: "error",
      message: "Resource notfound.",
    });
    return;
  }

  Object.assign(product, req.body);

  await writeDb(RESOURCE, products);

  res.json({
    status: "success",
    data: product,
  });
};

const destroy = async (req, res) => {
  const products = await readDb(RESOURCE);
  const productIndex = products.findIndex(
    (productIndex) => productIndex.id === +req.params.id
  );

  if (productIndex === -1) {
    res.status(404).json({
      status: "error",
      message: "Resource notfound.",
    });
    return;
  }

  products.splice(productIndex, 1);

  await writeDb(RESOURCE, products);

  res.status(204).send();
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
