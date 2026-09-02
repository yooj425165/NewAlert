const notifier = require("node-notifier");
const cron = require("node-cron");
const { exec } = require("child_process");

notifier.on("click", () => {
  console.log("사용자가 알림을 클릭했습니다. 사이트로 이동합니다.");
  exec('open "https://news.naver.com/"');
});

function sendNotification() {
  notifier.notify({
    title: "아침 알림 ⏰",
    message: "좋은 아침입니다! 오늘의 일정을 확인하세요.",
    sound: true,
    wait:true,
  });
  console.log(`[${new Date().toLocaleString()}] 아침 알림이 발송되었습니다.`);
}
cron.schedule("* * * * *", () => {
  sendNotification();
});

console.log("백그라운드 알림 스케줄러가 시작되었습니다. (매일 아침 8시 실행)");