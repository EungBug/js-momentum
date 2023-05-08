const mainSection = document.querySelector('main');
const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.getElementById('greeting');

// 단순하게 stirng 값만 가지고 있는 변수는 변수명을 대문자로 작성해도 무관
const HIDDEN_CLASSNAME = 'hidden';
const USERNAEM_KEY = 'username';
const LOGIN_CLASSNAME = 'login';

function onLoginSubmit(event) {
  // 이벤트가 브러우저의 기본 동작을 실행하지 않도록 막는 메서드
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAEM_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  hiddenLoginForm();
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function hiddenLoginForm() {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  mainSection.classList.remove(LOGIN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAEM_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // 버튼 클릭 이벤트 대신 form의 submit 이벤트를 감지
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
