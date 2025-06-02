const { randomUUID } = require("node:crypto");
const sessionModel = require("@/models/session.model");

async function handleSessions(req, res, next) {
  let _sid = req.cookies.sid;

  let session = _sid && (await sessionModel.findBySid(req.cookies.sid));
  if (!session) {
    _sid = randomUUID();
    const date = new Date();
    session = await sessionModel.create({ sid: _sid, data: "{}" });
    date.setDate(date.getDate() + 1);
    res.set("Set-cookie", `sid=${_sid}; path=/; httpOnly; expires=${date}`);
  }

  req.session = JSON.parse(session.data);

  res.setFlash = (data) => {
    req.session.flash = data;
  };

  res.on("finish", () => {
    sessionModel.update(_sid, {
      data: JSON.stringify(req.session),
    });
  });

  next();
}
module.exports = handleSessions;
