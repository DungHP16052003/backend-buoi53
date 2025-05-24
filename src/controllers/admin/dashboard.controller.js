const usersService = require("@/services/users.service");

exports.dashboard = async (req, res) => {
  const item = await usersService.getAll();

  res.render("admin/dashboard/index", {
    title: "Users list",
    users: item,
    layout: "admin/layouts/default",
  });
};
exports.show = async (req, res) => {
  const user = await usersService.getOne();

  res.render("admin/dashboard/show", {
    title: "post detail",
    users: user,
  });
};
exports.create = async (req, res) => {
  res.render("admin/dashboard/create");
};
exports.store = async (req, res) => {
  const { confirm_password, ...body } = req.body;
  console.log(body);

  const user = await usersService.create(body);
  res.redirect("/admin/users");
};
