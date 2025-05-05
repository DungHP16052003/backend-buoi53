const express = require("express");
const fs = require("fs").promises;

const DB_PATH = "./db.json";
const RESOURCE = "category";

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
  const category = await readDb(RESOURCE);
  console.log(category);

  res.json({
    status: "success",
    data: category,
  });
};

const show = async (req, res) => {
  const category = await readDb(RESOURCE);
  const item = category.find((item) => item.id === +req.params.id);

  if (!item) {
    res.status(404).json({
      status: "error",
      message: "Resource notfound.",
    });
    return;
  }

  res.json({
    status: "success",
    data: item,
  });
};

const store = async (req, res) => {
  const category = await readDb(RESOURCE);
  const nextId = (category.at(-1)?.id ?? 0) + 1;
  const item = {
    ...req.body,
    id: nextId,
  };

  category.push(item);

  await writeDb(RESOURCE, category);

  res.status(201).json({
    status: "success",
    data: item,
  });
};

const update = async (req, res) => {
  const category = await readDb(RESOURCE);
  const item = category.find((item) => item.id === +req.params.id);

  if (!item) {
    res.status(404).json({
      status: "error",
      message: "Resource notfound.",
    });
    return;
  }

  Object.assign(item, req.body);

  await writeDb(RESOURCE, category);

  res.json({
    status: "success",
    data: item,
  });
};

const destroy = async (req, res) => {
  const category = await readDb(RESOURCE);
  const itemIndex = category.findIndex(
    (itemIndex) => itemIndex.id === +req.params.id
  );

  if (itemIndex === -1) {
    res.status(404).json({
      status: "error",
      message: "Resource notfound.",
    });
    return;
  }

  category.splice(itemIndex, 1);

  await writeDb(RESOURCE, category);

  res.status(204).send();
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
