function checkAuth(req, res, next) {
  // const isAuthRequires = !["/register", "/login"].includes(req.path);
  // Bổ sung /verify-email
  // const isAuthRequired = !["/register", "/login", "/verify-email"].includes(
  //   req.path
  // );

  // if (!res.locals.auth && isAuthRequired) {
  //   return res.redirect("/admin/login");
  // }

  // if (res.locals.auth && !isAuthRequired) {
  //   // Thêm block if này để kiểm tra:
  //   // 1. Nếu user đã đăng nhập, và:
  //   // 2. Nếu user chưa xác minh email, và:Add commentMore actions
  //   // 3. Nếu user truy cập vào một trang cần xác thực mới được phép vào
  //   if (res.locals.auth && !res.locals.auth.verified_at && isAuthRequired) {
  //     // Chuyển qua /admin/login kèm báo lỗi
  //     res.setFlash({
  //       type: "error",
  //       message: "Vui lòng xác minh địa chỉ email trước.",
  //     });
  //     return res.redirect("/admin/login");
  //   }

  //   if (res.locals.auth && !isAuthRequired && res.locals.auth.verified_at) {
  //     return res.redirect("/admin/users");
  //   }
  // }

  next();
}

module.exports = checkAuth;
