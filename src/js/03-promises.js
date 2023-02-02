// import Notiflix from "notiflix";

// Get accesses and add listeners

const form = document.querySelector('form');
const button = document.querySelector('button');

form.addEventListener('submit', interval);

// The function make interval for createPromise

function interval(evt) {
  let counter = 0;
  const MAX_COUNTER = Number(form[2].value);

  let positionCounter = 0;
  let firstDelay = Number(form[0].value);
  const usrDelayStep = Number(form[1].value);

  evt.preventDefault();

  const intervalID = setInterval(() => {
    if (counter === MAX_COUNTER) {
      clearInterval(intervalID);
      return;
    }
    const totalDelay = (firstDelay += usrDelayStep);
    const positionPromise = (positionCounter += 1);

    createPromise(positionPromise, totalDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          {
            timeout: 8000,
          }
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          {
            timeout: 8000,
          }
        );
      });
    counter += 1;
  }, usrDelayStep);
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
