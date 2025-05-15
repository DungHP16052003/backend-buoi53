const express = require("express");

const todosController = require("../controllers/todos.controller");
const { createTodosValidator } = require("../validators/todos.validator");
const { updateProductsValidator } = require("../validators/products.validator");
const router = express.Router();

router.get("/", todosController.getList);

router.get("/:id", todosController.getOne);

router.post("/", createTodosValidator, todosController.create);

router.put("/:id", updateProductsValidator, todosController.update);

router.patch("/:id", updateProductsValidator, todosController.update);

router.delete("/:id", todosController.remove);

module.exports = router;
