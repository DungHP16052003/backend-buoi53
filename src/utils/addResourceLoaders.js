const throw404 = require("./throw404");

const models = {
  user: require("@/models/user.model"),
  post: require("@/models/posts.model"),
  category: require("@/models/category.model"),
  product: require("@/models/product.model"),
};
function addResourceLoaders(router, params) {
  params.forEach((param) => {
    router.param(param, async (req, res, next, id) => {
      const resource = await models[param].findAll(id);
      if (!resource)
        throw404(`${param[0].toUpperCase() + param.splice(1)} not found`);
      req[param] = resource;
      next();
    });
  });
}

module.exports = addResourceLoaders;
