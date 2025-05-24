const usersService = require("@/services/users.service");

exports.forgot_password = async (req, res) => {
  try {
    const item = await usersService.getAll();
    console.log(item);

    res.render("admin/forgot_password/index", {
      forgot_password: item,
    });
  } catch (error) {
    console.log(error);
  }
};
