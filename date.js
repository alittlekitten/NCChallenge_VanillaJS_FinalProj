const clockContainer2 = document.querySelector(".js-date"),
    clockDate = clockContainer2.querySelector("h2");

function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();
  clockDate.innerText = `${year}/${month < 10 ? `0${month}` : month}/${day < 10 ? `0${day}` : day}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();