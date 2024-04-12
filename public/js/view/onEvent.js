import getNewsData from "./news.js";
import countdown from "./timer.js";

function updateEvent() {
  const updateBtn = document.querySelector(".update");
  updateBtn.addEventListener("click", handleUpdate);
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function handleUpdate() {
  const wrap = document.querySelector(".wrap");
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const loadingIcon = document.createElement("img");
  loadingIcon.classList.add("loading-icon");
  loadingIcon.src = "../img/loding.gif";
  wrap.appendChild(modal);
  wrap.appendChild(loadingIcon);

  await delay(3000);

  getNewsData();

  document.querySelectorAll(".loading-icon, .modal").forEach((el) => wrap.removeChild(el));

  countdown();
}

export default updateEvent;
