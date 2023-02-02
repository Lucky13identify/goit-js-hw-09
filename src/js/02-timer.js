// Описан в документации
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

// Get properties and adding listeners.

const input = document.querySelector('input#datetime-picker');
const button = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

button.addEventListener('click', start);

button.disabled = 'true';

// Flatpicker.

let flat = flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  //   If the choosen date is valid - ok, else - alert window
  // and disabled button.

  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      button.disabled = 'true';
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      button.disabled = '';
    }
  },
});

// Converter of Date

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

// 'Pad' function

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// Start timer

function start() {
  const timerId = setInterval(() => {
    const date = new Date(input.value);
    const minus = date - Date.now();
    const result = convertMs(minus);

    // Update textContent

    days.textContent = result.days;
    hours.textContent = result.hours;
    minutes.textContent = result.minutes;
    seconds.textContent = result.seconds;

    // Stop the timer

    const END_TIMER = '00';
    if (
      days.textContent === END_TIMER &&
      hours.textContent === END_TIMER &&
      minutes.textContent === END_TIMER &&
      seconds.textContent === END_TIMER
    ) {
      clearInterval(timerId);
    }
  }, 1000);

  button.disabled = 'true';

  reload();
}

// Reload page

function reload() {
  input.addEventListener('click', () => {
    document.location.reload();
  });
}
