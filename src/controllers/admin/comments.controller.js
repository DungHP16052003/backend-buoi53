const usersService = require("@/services/users.service");

exports.comment = async (req, res) => {
  try {
    console.log("hello");
    const item = await usersService.getAll();
    console.log(item);

    res.render("admin/comments/index", {
      Comments: item,
      title: "Comments",
    });
  } catch (error) {
    console.log(error);
  }
};
