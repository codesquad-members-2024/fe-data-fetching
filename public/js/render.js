export function displayNewsList(newsData, selectedId) {
  const newsList = document.querySelector(".news-title-box ul");
  const newsListHtml = newsData.reduce((html, news) => {
    return (
      html +
      `<li data-id=${news.id} class=${
        news.id === selectedId ? "selected" : ""
      }><a>${news.title}</a></li>`
    );
  }, "");
  newsList.innerHTML = newsListHtml;
}

export function displayNewsContent(selectedNews) {
  const newsContent = document.querySelector(".news-content-box");
  const newsContentHtml = `<h2>${selectedNews.title}</h2>
    <p>${selectedNews.content}</p>`;
  newsContent.innerHTML = newsContentHtml;
}

let seconds = 60;
let timer;

export function displayTimer() {
  timer = setInterval(() => {
    const timerBox = document.querySelector(".timer");
    timerBox.textContent = `${seconds--}초 뒤에 자동 업데이트`;
    if (seconds < 0) clearInterval(timer);
  }, 1000);
}
