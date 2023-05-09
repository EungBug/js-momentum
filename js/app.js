const mainSection = document.querySelector('main');
const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.getElementById('greeting');
const desktop = document.querySelector('.desktop');
const logoutBtn = document.getElementById('log-out');
const footerEl = document.querySelector('footer');

// 단순하게 stirng 값만 가지고 있는 변수는 변수명을 대문자로 작성해도 무관
const HIDDEN_CLASSNAME = 'hidden';
const USERNAEM_KEY = 'username';
const LOGIN_CLASSNAME = 'login';

function onLoginSubmit(event) {
  // 이벤트가 브러우저의 기본 동작을 실행하지 않도록 막는 메서드
  event.preventDefault();
  if (loginInput.value.trim() === '') return;
  const username = loginInput.value;
  localStorage.setItem(USERNAEM_KEY, username);
  loginInput.value = '';
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
  desktop.classList.remove(HIDDEN_CLASSNAME);
  footerEl.classList.remove(HIDDEN_CLASSNAME);
}

function showLoginForm() {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  mainSection.classList.add(LOGIN_CLASSNAME);
  desktop.classList.add(HIDDEN_CLASSNAME);
  footerEl.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  // 버튼 클릭 이벤트 대신 form의 submit 이벤트를 감지
  loginForm.addEventListener('submit', onLoginSubmit);
}

const savedUsername = localStorage.getItem(USERNAEM_KEY);
if (savedUsername === null) {
  showLoginForm();
} else {
  paintGreetings(savedUsername);
}

const onClickLogoutHandler = () => {
  localStorage.removeItem(USERNAEM_KEY);
  showLoginForm();
};

logoutBtn.addEventListener('click', onClickLogoutHandler);
