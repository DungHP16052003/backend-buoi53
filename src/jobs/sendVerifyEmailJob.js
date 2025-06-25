const transporter = require("@/configs/mailer");
const loadEmail = require("@/utils/loadEmail");
const usersService = require("@/services/users.service");
const { createToken } = require("@/utils/jwt");

async function sendVerifyEmailJob(job) {
  const { userId } = JSON.parse(job.payload);

  const user = await usersService.getOne(userId);

  const token = createToken({ userId: user.id }, { expiresIn: 60 * 60 * 12 });
  const data = { token, userId };

  console.log(token, userId);
  const template = await loadEmail("auth/verification", data);

  console.log(`Bắt đầu gửi email tới: ${user.email}`);

  const info = await transporter.sendMail({
    from: "dunghaf8202@fullstack.edu.vn",
    subject: "Verification email",
    to: user.email,
    html: template,
  });

  await usersService.update(userId, {
    email_sent_at: new Date(),
  });
}

module.exports = sendVerifyEmailJob;
