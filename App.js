const notifier = require("node-notifier");
const cron = require("node-cron");
const { exec } = require("child_process");

notifier.on("click", () => {
  console.log("사용자가 알림을 클릭했습니다. 사이트로 이동합니다.");
  exec('open "https://news.naver.com/"'); //여기서 사이트를 바꾸셔도 무방합니다.
});

function sendNotification() {
  notifier.notify({
    title: "아침 뉴스 알림 📢",  //알림 제목입니다. 커스텀 가능
    message: "좋은 아침입니다! 오늘의 뉴스를 확인하세요.",  //알림 내용입니다. 커스텀 가능
    sound: true, //true : 소리와 함께 알림이 옵니다.
    wait:true, // [주의! 이 부분을 true로 해야 알림 클릭시 news.naver.com으로 이동합니다!]
    timeout:10, // 알림이 몇 '초'동안 유지 될지 정합니다.

  });
  console.log(`[${new Date().toLocaleString()}] 아침 알림이 발송되었습니다.`);
}
cron.schedule("0 8 * * *", () => { //여기서 .schedule("분 시 일 월 요일") 로 커스텀 가능(기본 값은 '매일 오전 8시')
  sendNotification();
});
console.log("백그라운드 알림 스케줄러가 시작되었습니다. (매일 아침 8시 실행)"); 