class Delay {
  constructor() {
    this.currentDelay = null;
  }

  setDelay(ms) {
    clearTimeout(this.currentDelay);

    return new Promise((resolve) => {
      this.currentDelay = setTimeout(resolve, ms);
    });
  }
}

export default Delay;
