const sidebarItems = [
  {
    title: "Users",
    icon: "fa-users",
    path: "/users",
  },
  {
    title: "Posts",
    icon: "fa-file-alt",
    path: "/posts",
  },
];
function handleSideBar(req, res, next) {
  res.locals.path = req.path;
  res.locals.sidebarItems = sidebarItems;
  next();
}
module.exports = handleSideBar;
