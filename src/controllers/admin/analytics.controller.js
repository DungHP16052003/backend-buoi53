const usersService = require("@/services/users.service");

exports.analytic = async (req, res) => {
  try {
    const item = await usersService.getAll();

    res.render("admin/analytics/index", {
      Analytics: item,
      title: "Analytics",
    });
  } catch (error) {
    console.log(error);
  }
};
