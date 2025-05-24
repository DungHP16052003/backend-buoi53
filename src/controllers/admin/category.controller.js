const categoryService = require("@/services/category.service");

exports.category = async (req, res) => {
  try {
    const item = await categoryService.getAllCategory();
    res.render("admin/categories/index", {
      category: item,
      title: "Category List",
    });
  } catch (error) {
    console.log(error);
  }
};
