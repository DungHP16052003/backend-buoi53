const postsService = require("@/services/posts.service");

exports.posts = async (req, res) => {
  try {
    console.log("hello");
    const item = await postsService.getAll();
    console.log(item);

    res.render("admin/posts/index", {
      title: "posts list",
      posts: item,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.show = async (req, res) => {
  const post = await postsService.getOne(req.params.id);

  res.render("admin/posts/show", {
    title: "post detail",
    posts: post,
  });
};
