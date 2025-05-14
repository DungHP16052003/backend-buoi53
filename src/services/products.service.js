const productModel = require("@/models/product.model");

class ProductsService {
  async getAll() {
    const products = await productModel.fillAll();
    return products;
  }
  async getOne(id) {
    const product = await productModel.getById(id);
    return product;
  }
  async create(data) {
    const product = await productModel.create(data);
    return product;
  }
  async update(id, data) {
    const product = await productModel.update(id, data);
    return product;
  }

  async remove(id) {
    const product = await productModel.remove(id);
    return product;
  }
}

module.exports = new ProductsService();
