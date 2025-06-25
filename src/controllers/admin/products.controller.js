const productsService = require("@/services/products.service");

exports.product = async (req, res) => {
  try {
    const item = await productsService.getAll();

    res.render("admin/products/index", {
      products: item,
      title: "Product List",
    });
  } catch (error) {
    console.log(error);
  }
};
