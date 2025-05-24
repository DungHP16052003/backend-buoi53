const usersService = require("@/services/users.service");

exports.register = async (req, res) => {
  try {
    const item = await usersService.getAll();
    console.log(item);

    res.render("admin/register/index", {
      register: item,
    });
  } catch (error) {
    console.log(error);
  }
};
