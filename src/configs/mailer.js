const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dunghaf8202@fullstack.edu.vn",
    pass: "miqu hagh mtpw slnh",
    // pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

module.exports = transporter;
