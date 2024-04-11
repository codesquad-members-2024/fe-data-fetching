let currentDelay = null;

const delay = (ms) => {
  if (currentDelay !== null) {
    clearTimeout(currentDelay);
    currentDelay = null; // delay 사용 후 clear 해줄 때 null 처리 꼭
  }
  return new Promise((resolve) => {
    currentDelay = setTimeout(resolve, ms);
  });
};

export default delay;
