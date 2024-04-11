import getNewsData from "./news.js";

function onEvent() {
  const updateBtn = document.querySelector(".update");
  updateBtn.addEventListener("click", handleUpdate);
}

async function handleUpdate() {
  const wrap = document.querySelector(".wrap");
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const loadingIcon = document.createElement("img");
  loadingIcon.classList.add("loading-icon");
  loadingIcon.src = "../img/loding.gif";
  wrap.appendChild(modal);
  wrap.appendChild(loadingIcon);

  // wrap.innerHTML += `<div class="modal"></div><img class="loading-icon" src="../img/loding.gif"></img>`;
  // 이렇게 기존 HTML에 문자열을 추가하면 이벤트가 한번만 작동됨

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);

  getNewsData();

  document.querySelectorAll(".loading-icon, .modal").forEach((el) => wrap.removeChild(el));
}

export default onEvent;
