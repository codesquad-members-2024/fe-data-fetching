export function toggleLoading(isOn) {
  const loadingEl = document.querySelector(".loading");
  if (isOn) {
    loadingEl.classList.remove("hide");
  } else {
    loadingEl.classList.add("hide");
  }
}
