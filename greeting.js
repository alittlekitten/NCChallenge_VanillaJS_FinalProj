const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); // 자동 새로고침 없애기
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // 폼 숨기기
    greeting.classList.add(SHOWING_CN); // 기존 요소 불러오기
    greeting.innerText = `안녕하세요 ${text}님!!`;
}

function loadName(){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){ // 현재 유저 이름 없으면 이름 묻기
         askForName();
    } else{ // 있으면 그거 불러오기
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();