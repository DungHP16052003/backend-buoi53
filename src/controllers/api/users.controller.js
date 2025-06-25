const path = require("path");
const transporter = require("@/configs/mailer");

const usersService = require("@/services/users.service");
const loadEmail = require("@/utils/loadEmail");
const response = require("@/utils/response");
const queue = require("@/utils/queue");
exports.getList = async (req, res) => {
  const userId = 25;
  queue.dispatch("sendVerifyEmailJob", { userId });
  const users = await usersService.getAll();
  response.success(res, 200, users);
};
exports.getOne = async (req, res) => {
  response.success(res, 200, req.user);
};

exports.create = async (req, res) => {
  const user = await usersService.create(req.body);
  response.success(res, 201, user);
};

exports.update = async (req, res) => {
  const user = await usersService.update(req.user.id, req.body);
  response.success(res, 200, user);
};

exports.remove = async (req, res) => {
  await usersService.remove(req.user.id);
  response.success(res, 204);
};
