const express = require("express");
const authRouter = require("../auth.route");
const postsRouter = require("../posts.route");
const categoryRouter = require("./category.route");
const todosRouter = require("../todos.route");
const usersRouter = require("./users.route");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/posts", postsRouter);
router.use("/category", categoryRouter);
router.use("/todos", todosRouter);
router.use("/users", usersRouter);

module.exports = router;
