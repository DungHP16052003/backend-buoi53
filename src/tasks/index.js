require("module-alias/register");
const scheduleJob = require("@/utils/scheduler");
const sendDailyReportEmail = require("./sendDailyReportEmail");

scheduleJob("send_daily_report_user", "0 2 * * *", sendDailyReportEmail);
