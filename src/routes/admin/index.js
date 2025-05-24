const express = require("express");

const dashboardRouter = require("@/routes/admin/dashboard.route");
const postsRouter = require("@/routes/admin/posts.route");
const productRouter = require("@/routes/admin/products.route");
const categoryRouter = require("@/routes/admin/category.route");
const topicRouter = require("@/routes/admin/topic.route");
const settingRouter = require("@/routes/admin/setting.route");
const analyticRouter = require("@/routes/admin/analytics.route");
const commentRouter = require("@/routes/admin/comments.route");
const accountRouter = require("@/routes/admin/account-settings.route ");
const loginRouter = require("@/routes/admin/login.route");
const registerRouter = require("@/routes/admin/register.route");
const forgotPasswordRouter = require("@/routes/admin/forgot_password.route");
const resetPasswordRouter = require("@/routes/admin/reset_password.route");

const router = express.Router();

router.use("/users", dashboardRouter);
router.use("/posts", postsRouter);
router.use("/products", productRouter);
router.use("/category", categoryRouter);
router.use("/topic", topicRouter);
router.use("/setting", settingRouter);
router.use("/analytic", analyticRouter);
router.use("/comment", commentRouter);
router.use("/account-settings", accountRouter);
router.use("/login", loginRouter);
router.use("/register", registerRouter);
router.use("/forgotPassword", forgotPasswordRouter);
router.use("/resetPassword", resetPasswordRouter);

module.exports = router;
