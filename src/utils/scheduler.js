require("module-alias/register");
const cron = require("node-cron");
const queue = require("@/utils/queue");

const activeTasks = {};
function scheduleJob(name, cronTime, handler) {
  if (activeTasks[name]) {
    return console(`Task "${name}" exists canceller`);
  }
  const task = cron.schedule(cronTime, async () => {
    try {
      const userId = 25;
      await queue.dispatch("sendVerifyEmailJob", { userId });
      handler();
    } catch (error) {
      console.error("Cron job error:", error);
    }
  });
  activeTasks[name] = task;
}
module.exports = scheduleJob;
