const userModel = require("@/models/user.model");
const transporter = require("@/configs/mailer");

async function sendDailyReportEmail() {
  const usersCount = await userModel.count();
  const newUserCount = await userModel.findCountNewUser();

  const info = await transporter.sendMail({
    from: "dunghaf8202@fullstack.edu.vn",
    subject: "Verification email",
    to: user.email,
    html: `
        <h1>Daily report</h1>
        <p>new User : ${newUserCount}</p>
        <p>total: ${usersCount}</p>
    `,
  });
  console.log(info);
}

module.exports = sendDailyReportEmail;
