const express = require("express");
const fs = require("fs").promises;

const DB_PATH = "./db.json";
const RESOURCE = "todos";

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
const getList = async (req, res) => {
  const todos = await readDb(RESOURCE);
  console.log(todos);

  res.json({
    status: "success",
    data: todos,
  });
};

const getOne = async (req, res) => {
  const todos = await readDb(RESOURCE);
  const todo = todos.find((todo) => todo.id === +req.params.id);

  if (!todo) {
    res.status(404).json({
      status: "error",
      message: "Resource notfound.",
    });
    return;
  }

  res.json({
    status: "success",
    data: todo,
  });
};

const create = async (req, res) => {
  const todos = await readDb(RESOURCE);
  const nextId = (todos.at(-1)?.id ?? 0) + 1;
  const todo = {
    ...req.body,
    id: nextId,
  };

  todos.push(todo);

  await writeDb(RESOURCE, todos);

  res.status(201).json({
    status: "success",
    data: todo,
  });
};

const update = async (req, res) => {
  const todos = await readDb(RESOURCE);
  const todo = todos.find((todo) => todo.id === +req.params.id);

  if (!todo) {
    res.status(404).json({
      status: "error",
      message: "Resource notfound.",
    });
    return;
  }

  Object.assign(todo, req.body);

  await writeDb(RESOURCE, todos);

  res.json({
    status: "success",
    data: todo,
  });
};

const remove = async (req, res) => {
  const todos = await readDb(RESOURCE);
  const todoIndex = todos.findIndex(
    (todoIndex) => todoIndex.id === +req.params.id
  );

  if (todoIndex === -1) {
    res.status(404).json({
      status: "error",
      message: "Resource notfound.",
    });
    return;
  }

  todos.splice(todoIndex, 1);

  await writeDb(RESOURCE, todos);

  res.status(204).send();
};

module.exports = {
  getList,
  getOne,
  create,
  update,
  remove,
};
