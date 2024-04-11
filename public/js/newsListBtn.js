import { fetchData, delay } from "./utils.js";
import { toggleLoading } from "./loading.js";
import { displayNewsContent } from "./render.js";

export function activateTitleList() {
  const titleList = document.querySelector(".news-title-box ul");

  titleList.addEventListener("click", async (e) => {
    const clickedItem = e.target.closest("li");
    const id = clickedItem.dataset.id;
    toggleLoading(true);
    await delay(2000);
    const selectedNews = await fetchData(`/api/news/${id}`);
    toggleLoading(false);

    displayNewsContent(selectedNews);
  });
}
