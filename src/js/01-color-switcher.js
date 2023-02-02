// Получаем доступы и вешаем слушателей

const body = document.querySelector("body");
const buttonStart = document.querySelector("[data-start]");
const buttonStop = document.querySelector("[data-stop]");

let timerID = null;

buttonStart.addEventListener("click", () => {
  timerID = setInterval(onBodyBgColor, 1000);
});
buttonStop.addEventListener("click", stopChangeBgColor);

console.log(buttonStop);

// Функция генерит случайный цвет

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Функция добавляет случайный цвет на body с интервалом

function onBodyBgColor() {
  buttonStart.disabled = "true";
  body.style.backgroundColor = getRandomHexColor();
}

// Функция возвращает стандарный фон и останавливает интервал

function stopChangeBgColor() {
  buttonStart.disabled = "";
  clearInterval(timerID);
  body.style.backgroundColor = "";
}
