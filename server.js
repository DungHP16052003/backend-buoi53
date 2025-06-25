require("module-alias/register");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const cors = require("cors");
const notHandleFound = require("@/middlewares.js/notHandleFound");
const errorHandler = require("@/middlewares.js/errorHandle");
const adminRouter = require("@/routes/admin");
const router = require("@/routes/api");
const cookieParser = require("cookie-parser");
const handleSessions = require("@/middlewares.js/admin/handleSession");
const shareLocals = require("@/middlewares.js/admin/shareLocals");
const checkAuth = require("@/middlewares.js/admin/checkAuth");
const app = express();

app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.use(expressLayouts);
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.set("layout", "admin/layouts/default");
app.set("layout", "admin/layouts/auth");

app.use(
  "/admin",
  handleSessions,
  shareLocals,

  checkAuth,
  adminRouter
);
app.use("/api/v1", router);

/** Bắt lỗi 404 và lỗi hệ thống */
app.use(notHandleFound);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("App running on port 3000");
});
