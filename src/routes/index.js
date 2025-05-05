const express = require("express");
const authRouter = require("./auth.route");
const postsRouter = require("./posts.route");
const commentsRouter = require("./comments.route");
const categoryRouter = require("./category.route");
const productsRouter = require("./products.route");
const todosRouter = require("./todos.route");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);
router.use("/category", categoryRouter);
router.use("/products", productsRouter);
router.use("/todos", todosRouter);

module.exports = router;
