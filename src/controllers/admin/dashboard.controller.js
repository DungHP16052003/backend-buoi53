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
  res.render("admin/dashboard/create", {
    old: {},
    errors: {},
  });
};

exports.store = async (req, res) => {
  const { confirm_password, ...body } = req.body;
  console.log(body);

  await usersService.create(body);
  res.setFlash({
    type: "success",
    message: "Tạo người dùng thành công",
  });
  res.redirect("/admin/users");
};

exports.edit = async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getOne(id);
  res.render("admin/dashboard/update", {
    title: "edit User",
    user,
    old: {},
    errors: {},
  });
};
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { confirm_password, ...body } = req.body;

    await usersService.update(id, body);
    res.redirect(`/admin/users/${id}/edit`);
  } catch (error) {
    const user = await usersService.getOne(req.params.id);
    res.render("admin/dashboard/update", {
      title: "edit User",
      user: { ...user, ...req.body },
      errors: error.message,
    });
  }
};
exports.forceDelete = async (req, res) => {
  const { id } = req.params;
  await usersService.forceDelete(id);
  redirect("/admin/users");
};
