import { displayInitialPage } from "./initialPage.js";

export function update() {
  const updateButton = document.querySelector("button");
  updateButton.addEventListener("click", async () => {
    await displayInitialPage();
  });
}
