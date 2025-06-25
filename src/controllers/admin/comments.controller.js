const usersService = require("@/services/users.service");

exports.comment = async (req, res) => {
  try {
    const item = await usersService.getAll();

    res.render("admin/comments/index", {
      Comments: item,
      title: "Comments",
    });
  } catch (error) {
    console.log(error);
  }
};
