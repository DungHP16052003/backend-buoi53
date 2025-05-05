const express = require("express");

const fs = require("fs").promises;

const DB_PATH = "./db.json";
const RESOURCE = "comments";

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
  const comments = await readDb(RESOURCE);
  res.json({
    status: "success",
    data: comments,
  });
};

const show = async (req, res) => {
  const comments = await readDb(RESOURCE);
  const comment = comments.find((comment) => comment.id === +req.params.id);

  if (!comment) {
    res.status(404).json({
      status: "error",
      message: "Resource notfound.",
    });
    return;
  }

  res.json({
    status: "success",
    data: comment,
  });
};

const store = async (req, res) => {
  const comments = await readDb(RESOURCE);
  const nextId = (comments.at(-1)?.id ?? 0) + 1;
  const comment = {
    ...req.body,
    id: nextId,
  };

  comments.push(comment);

  await writeDb(RESOURCE, comments);

  res.status(201).json({
    status: "success",
    data: comment,
  });
};

const update = async (req, res) => {
  const comments = await readDb(RESOURCE);
  const comment = comments.find((comment) => comment.id === +req.params.id);

  if (!comment) {
    res.status(404).json({
      status: "error",
      message: "Resource notfound.",
    });
    return;
  }

  Object.assign(comment, req.body);

  await writeDb(RESOURCE, comments);

  res.json({
    status: "success",
    data: comment,
  });
};

const destroy = async (req, res) => {
  const comments = await readDb(RESOURCE);
  const commentIndex = comments.findIndex(
    (comment) => comment.id === +req.params.id
  );

  if (commentIndex === -1) {
    res.status(404).json({
      status: "error",
      message: "Resource notfound.",
    });
    return;
  }

  comments.splice(commentIndex, 1);

  await writeDb(RESOURCE, comments);

  res.status(204).send();
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
