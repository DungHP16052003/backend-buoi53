const categoryModel = require("@/models/category.model");

class CategoryService {
  async getAllCategory() {
    const categories = await categoryModel.findAll();
    return categories;
  }
  async getOne(id) {
    const item = await categoryModel.findById(id);
    return item;
  }
  async create(data) {
    const item = await categoryModel.create(data);
    return item;
  }
  async update(id, data) {
    const item = await categoryModel.update(id, data);
    return item;
  }
  async delete(id) {
    const item = await categoryModel.delete(id);
    return item;
  }
}

module.exports = new CategoryService();
