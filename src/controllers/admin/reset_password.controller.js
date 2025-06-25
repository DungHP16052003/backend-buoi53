const usersService = require("@/services/users.service");

exports.reset_password = async (req, res) => {
  try {
    const item = await usersService.getAll();

    res.render("admin/reset_password/index", {
      reset_password: item,
    });
  } catch (error) {
    console.log(error);
  }
};
