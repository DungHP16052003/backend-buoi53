const usersService = require("@/services/users.service");

exports.account = async (req, res) => {
  try {
    const item = await usersService.getAll();
    console.log(item);

    res.render("account-settings/index", {
      Account: item,
      title: "Account",
    });
  } catch (error) {
    console.log(error);
  }
};
