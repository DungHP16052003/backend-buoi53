const usersService = require("@/services/users.service");

exports.setting = async (req, res) => {
  try {
    const item = await usersService.getAll();

    res.render("admin/settings/index", {
      Setting: item,
      title: "Settings",
    });
  } catch (error) {
    console.log(error);
  }
};
