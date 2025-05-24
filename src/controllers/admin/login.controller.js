const usersService = require("@/services/users.service");

exports.login = async (req, res) => {
  try {
    const item = await usersService.getAll();
    console.log(item);

    res.render("admin/login/index", {
      login: item,
    });
  } catch (error) {
    console.log(error);
  }
};
