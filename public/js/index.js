import { fetchData } from "./fetch.js";
import { toggleLoading } from "./loading.js";

function main() {
  init();
  const updateButton = document.querySelector("button");
  updateButton.addEventListener("click", async () => {
    //나중에
  });
}

async function init() {
  await displayInitialPage();
  activateTitleList();
}

async function displayInitialPage() {
  toggleLoading(true);
  const newsTitleList = await fetchData("/api/news/list");
  const firstNewsId = newsTitleList[0].id;
  const selectedNews = await fetchData(`/api/news/${firstNewsId}`);
  toggleLoading(false);
  displayNewsList(newsTitleList);
  displayNewsContent(selectedNews);
}

function activateTitleList() {
  const titleList = document.querySelector(".news-title-box ul");

  titleList.addEventListener("click", async (e) => {
    const clickedItem = e.target.closest("li");
    const id = clickedItem.dataset.id;
    toggleLoading(true);

    const selectedNews = await fetchData(`/api/news/${id}`);
    toggleLoading(false);

    displayNewsContent(selectedNews);
  });
}

function displayNewsList(newsData) {
  const newsList = document.querySelector(".news-title-box ul");
  const newsListHtml = newsData.reduce((html, news) => {
    return html + `<li data-id=${news.id}><a>${news.title}</a></li>`;
  }, "");
  newsList.innerHTML = newsListHtml;
}

function displayNewsContent(selectedNews) {
  const newsContent = document.querySelector(".news-content-box");
  const newsContentHtml = `<h2>${selectedNews.title}</h2>
  <p>${selectedNews.description}</p>`;
  newsContent.innerHTML = newsContentHtml;
}

main();
