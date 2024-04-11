function onEvent() {
  const updateBtn = document.querySelector(".update");
  updateBtn.addEventListener("click", handleUpdate);
}
function handleUpdate() {
  const wrap = document.querySelector(".wrap");
  wrap.innerHTML += `<div class="modal"></div><img class="loading-icon" src="../img/loding.gif"></img>`;

  setTimeout(() => {
    location.reload();
    const loadingImage = document.querySelector(".loading");
    const modal = document.querySelector(".modal");
    wrap.removeChild(loadingImage, modal);
  }, 3000);
}

export default onEvent;