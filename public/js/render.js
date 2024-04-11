export function displayNewsList(newsData) {
  const newsList = document.querySelector(".news-title-box ul");
  const newsListHtml = newsData.reduce((html, news) => {
    return html + `<li data-id=${news.id}><a>${news.title}</a></li>`;
  }, "");
  newsList.innerHTML = newsListHtml;
}

export function displayNewsContent(selectedNews) {
  const newsContent = document.querySelector(".news-content-box");
  const newsContentHtml = `<h2>${selectedNews.title}</h2>
    <p>${selectedNews.content}</p>`;
  newsContent.innerHTML = newsContentHtml;
}
