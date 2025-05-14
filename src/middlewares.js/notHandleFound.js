const response = require("@/utils/response");
function notHandleFound(req, res) {
  response.error(res, 404, "Resource not found");
}

module.exports = notHandleFound;
