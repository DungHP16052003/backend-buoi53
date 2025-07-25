const postsModel = require("@/models/posts.model");

class PostsService {
  async getAll() {
    const posts = await postsModel.findAll();
    return posts;
  }
  async getOne(id) {
    const post = await postsModel.findById(id);
    return post;
  }

  async create(data) {
    const post = await postsModel.create(data);
    return post;
  }

  async update(id, data) {
    const post = await postsModel.update(id, data);
    return post;
  }

  async remove(id) {
    const post = await postsModel.remove(id);
    return post;
  }
}
module.exports = new PostsService();
