import { fetchData, delay } from "./utils.js";
import { toggleLoading } from "./loading.js";
import { displayNewsContent, displayNewsList } from "./render.js";

let cachedNewsListCopy;

export function activateTitleList(cachedNewsList) {
  cachedNewsListCopy = cachedNewsList;
  const titleList = document.querySelector(".news-title-box ul");

  titleList.removeEventListener("click", listClickHandler);

  titleList.addEventListener("click", listClickHandler);
}

async function listClickHandler(event) {
  const { target } = event;
  const clickedItem = target.closest("li");
  const id = clickedItem.dataset.id;
  toggleLoading(true);
  await delay(2000);
  const selectedNews = await fetchData(`/api/news/${id}`);
  toggleLoading(false);
  displayNewsList(cachedNewsListCopy, Number(id));
  displayNewsContent(selectedNews);
}
