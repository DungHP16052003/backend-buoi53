require("module-alias/register");
const express = require("express");
const cors = require("cors");

const notHandleFound = require("@/middlewares.js/notHandleFound");
const errorHandler = require("@/middlewares.js/errorHandle");

const app = express();
const router = require("@/routes");
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/v1", router);

/** Bắt lỗi 404 và lỗi hệ thống */
app.use(notHandleFound);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("App running on port 3000");
});
