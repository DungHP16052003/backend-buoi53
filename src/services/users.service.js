const usersModel = require("@/models/user.model");

class UsersService {
  async getAll() {
    const users = await usersModel.findAll();
    return users;
  }
  async getOne(id) {
    const user = await usersModel.findById(id);
    return user;
  }
  async getEmailAndPassword(email, password) {
    const user = await usersModel.findByEmailAnhPassword(email, password);
    return user;
  }

  async create(data) {
    const user = await usersModel.create(data);
    return user;
  }

  async update(id, data) {
    const user = await usersModel.update(id, data);
    return user;
  }

  async remove(id) {
    const user = await usersModel.remove(id);
    return user;
  }
}
module.exports = new UsersService();
