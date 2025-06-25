const usersService = require("@/services/users.service");

exports.account = async (req, res) => {
  try {
    const item = await usersService.getAll();

    res.render("account-settings/index", {
      Account: item,
      title: "Account",
    });
  } catch (error) {
    console.log(error);
  }
};
