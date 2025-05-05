const express = require("express");

const todosController = require("../controllers/todos.controller");
const { createTodosValidator } = require("../validators/todos.validator");
const { updateProductsValidator } = require("../validators/products.validator");
const router = express.Router();

router.get("/", todosController.index);

router.get("/:id", todosController.show);

router.post("/", createTodosValidator, todosController.store);

router.put("/:id", updateProductsValidator, todosController.update);

router.patch("/:id", updateProductsValidator, todosController.update);

router.delete("/:id", todosController.destroy);

module.exports = router;
