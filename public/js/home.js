function main() {
  const updateButton = document.querySelector("button");

  updateButton.addEventListener("click", async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=c872dc5c3a7546958dcb2c8b41c4d624"
      );
      if (response.ok) {
        const newData = await response.json();
        const newNewsData = newData.articles;
        displayNewsList(newNewsData);
        displayNewsContent(newNewsData);
      } else {
        console.error("Failed to update news");
      }
    } catch (error) {
      console.error("Error updating news:", error);
    }
  });
}

function displayNewsList(newsData) {
  const newsList = document.querySelector(".news-title-box ul");
  const newsListHtml = newsData.reduce((html, news) => {
    return html + `<li>${news.title}</li>`;
  }, "");
  newsList.innerHTML = newsListHtml;
}

function displayNewsContent(newsData) {
  const newsContent = document.querySelector(".news-content-box");
  const firstNews = newsData[0];
  const newsContentHtml = `<h2>${firstNews.title}</h2>
  <p>${firstNews.description}</p>`;
  newsContent.innerHTML = newsContentHtml;
}

main();
