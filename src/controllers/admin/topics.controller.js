const usersService = require("@/services/users.service");

exports.topic = async (req, res) => {
  try {
    const item = await usersService.getAll();
    console.log(item);

    res.render("admin/topic/index", {
      topic: item,
    });
  } catch (error) {
    console.log(error);
  }
};
