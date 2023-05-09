const clock = document.querySelector('h2#clock');

function getClock() {
  const today = new Date();
  // 시계 숫자를 2자리로 맞추는 방법
  // padStart() 함수 사용하기!
  // const hours = String(date.getHours()).padStart(2, '0');
  // const minutes = String(date.getMinutes()).padStart(2, '0');
  // const seconds = String(date.getSeconds()).padStart(2, '0');
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();

  clock.innerText = `${month}월 ${date}일 (${getDayString(day)}) ${today.toLocaleTimeString('ko-KR')}`;
}

function getDayString(day) {
  switch (day) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

getClock();
setInterval(getClock, 1000);
