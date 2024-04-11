function getNewsData() {
  fetch("/news")
    .then((response) => response.json())
    .then((data) => {
      const shuffle = () => Math.random() - 0.5;
      const shuffledData = data.articles.sort(shuffle);

      const titleList = document.querySelector(".title-list");
      const newsArticle = document.querySelector(".news-article");

      shuffledData.forEach((item) => {
        titleList.innerHTML += `<p>${item.title}</p>`;
      });

      titleEventListener(titleList, newsArticle, shuffledData);

      const firstPTag = titleList.querySelectorAll("p")[0];
      firstPTag.click();
    })
    .catch((error) => console.error("Error fetching news:", error));
}

function titleEventListener(titleList, newsArticle, data) {
  let click;

  titleList.addEventListener("click", function (event) {
    if (event.target.tagName === "P") {
      const index = Array.from(this.children).indexOf(event.target);
      const title = data[index].title;
      const clicked = data[index].description;
      newsArticle.innerHTML = `<div class="loading-text">Loading ...</div>`;

      clearTimeout(click);

      click = setTimeout(() => {
        newsArticle.innerHTML = `<h3>${title}</h3><p>${clicked}</p>`;
      }, 3000);
    }
  });
}

export default getNewsData ;
