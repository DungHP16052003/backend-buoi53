const productsService = require("@/services/products.service");

exports.product = async (req, res) => {
  try {
    console.log("hello");
    const item = await productsService.getAll();
    console.log(item);

    res.render("admin/products/index", {
      products: item,
      title: "Product List",
    });
  } catch (error) {
    console.log(error);
  }
};
