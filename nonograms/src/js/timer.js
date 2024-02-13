export default class CountdownTimer {
  constructor(targetDate) {
    this.targetDate = targetDate;
  }

  start() {
    return setInterval(() => {
      const currentTime = Date.now();
      const time = currentTime - this.targetDate;
      this.getTimeComponents(time);
    }, 1000);
  }

  stop(timerId) {
    clearInterval(timerId);
  }

  getTime(time) {
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return secs;
  }

  getTimeComponents(time) {
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return this.setTimer({ mins, secs });
  }

  setTimer(timeComponents) {
    const { body } = document;
    const valuesArr = body.querySelectorAll(".value");
    valuesArr.forEach((el) => {
      el.textContent = timeComponents[el.dataset.value];
    });
  }

  pad(value) {
    return String(value).replace("-", "").padStart(2, "0");
  }
}
