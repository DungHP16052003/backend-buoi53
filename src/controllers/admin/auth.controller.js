const usersService = require("@/services/users.service");
const md5 = require("md5");
const { createToken, verifyToken } = require("@/utils/jwt");
const transporter = require("@/configs/mailer");

exports.showRegisterForm = async (req, res) => {
  res.render("admin/auth/register", {
    layout: "admin/layouts/auth",
  });
};
exports.register = async (req, res) => {
  const user = await usersService.create({
    email: req.body.email,
    password: md5(req.body.password),
  });
  // Tạo token
  const token = createToken(
    { userId: user.id }, // Đính userId vào token
    {
      expiresIn: 60 * 60 * 12, // Thời hạn 12 hours
    }
  );

  // Tạo link xác minh email (để gửi kèm email xác minh)
  const verifyUrl = `${req.protocol}://${req.host}/admin/verify-email?token=${token}`;

  await transporter.sendMail({
    from: "mailer@fullstack.edu.vn",
    to: user.email, // Gửi cho đúng tài khoản vừa đăng ký
    html: `
            <div>
                <p>
                    Nhấn vào đây để xác thực:
                </p>
                <p>Add commentMore actions
                    <a href="${verifyUrl}">Xác minh tài khoản</a>
                </p>
            </div>
        `,
  });

  res.setFlash({
    type: "success",
    message: `Chúng tôi đã gửi một email xác thực tới ${user.email}. Hãy kiểm tra inbox và xác minh để tiếp tục.`,
  });
  res.redirect("/admin/login");
};
exports.verifyEmail = async (req, res) => {
  // Nhận token từ query parameter
  const token = req.query.token;

  // Xác thực token hợp lệ
  const verify = verifyToken(token);

  // Xác thực thành công
  if (verify.success) {
    // Lất userId từ token
    const userId = verify.data.userId;

    // Lấy user từ DB
    const user = await usersService.getById(userId);

    // Nếu verify rồi thì chuyển qua login kèm message lỗi
    if (user.verified_at) {
      res.setFlash({
        type: "info",
        message: "Liên kết xác minh đã hết hạn hoặc không hợp lệ.",
      });
      return res.redirect("/admin/login");
    }

    // Cập nhật verified_at vào user với thời gian hiện tại (thời gian user click vào link xác thực trong email)
    await usersService.update(userId, {
      verified_at: new Date(),
    });
    res.send("Verify success");
    return;
  }
  res.send("Verify fail");
};

exports.showLoginForm = async (req, res) => {
  res.render("admin/auth/login", {
    layout: "admin/layouts/auth",
  });
};

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = md5(req.body.password);
  try {
    const user = await usersService.getEmailAndPassword(email, password);
    req.session.userId = user.id;
    return res.redirect("/admin/users");
  } catch (error) {
    res.setFlash({
      type: "info",
      message: "Tai khoan khong hop le.",
    });
    return res.redirect("/admin/login");
  }
};

exports.logout = async (req, res) => {
  delete req.session.userId;
  res.redirect("/admin/login");
};
