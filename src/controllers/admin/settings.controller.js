const usersService = require("@/services/users.service");

exports.setting = async (req, res) => {
  try {
    const item = await usersService.getAll();
    console.log(item);

    res.render("admin/settings/index", {
      Setting: item,
      title: "Settings",
    });
  } catch (error) {
    console.log(error);
  }
};
