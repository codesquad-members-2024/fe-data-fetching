import { fetchData, delay } from "./utils.js";
import { toggleLoading } from "./loading.js";
import { displayNewsContent, displayNewsList } from "./render.js";

export function activateTitleList(cachedNewsList) {
  const titleList = document.querySelector(".news-title-box ul");

  titleList.addEventListener("click", async (e) => {
    const clickedItem = e.target.closest("li");
    const id = clickedItem.dataset.id;
    toggleLoading(true);
    await delay(2000);
    const selectedNews = await fetchData(`/api/news/${id}`);
    toggleLoading(false);
    displayNewsList(cachedNewsList, Number(id));
    displayNewsContent(selectedNews);
  });
}
