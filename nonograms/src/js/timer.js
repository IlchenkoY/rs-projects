export default function createCountdownTimer(targetDate) {
  let timerId = null;
  let time;
  function start() {
    timerId = setInterval(() => {
      const currentTime = Date.now();
      time = currentTime - targetDate;
      const timeComponents = getTimeComponents(time);
      setTimer(timeComponents);
    }, 1000);
  }

  function stop() {
    clearInterval(timerId);
  }

  function getTime() {
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return secs;
  }

  function getTimeComponents(time) {
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { mins, secs };
  }

  function setTimer(timeComponents) {
    const { body } = document;
    const valuesArr = body.querySelectorAll(".value");
    valuesArr.forEach((el) => {
      el.textContent = timeComponents[el.dataset.value];
    });
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  return { start, stop, getTime };
}
