let click; 

function getNewsData() {
  fetch("/users")
    .then((response) => response.json())
    .then((data) => {
      const titleList = document.querySelector(".title-list");
      const newsArticle = document.querySelector(".news-article");
      data.articles.forEach((item) => {
        titleList.innerHTML += `<p>${item.title}</p>`;
      });

      titleEventListener(titleList, newsArticle, data);
    })
    .catch((error) => console.error("Error fetching news:", error));
}

function titleEventListener(titleList, newsArticle, data) {
  titleList.addEventListener("click", function (event) {
    if (event.target.tagName === "P") {
      const index = Array.from(this.children).indexOf(event.target);
      const clicked = data.articles[index].description;
      newsArticle.innerHTML = `<div>Loding...</div>`;
      
      clearTimeout(click);

      click = setTimeout(() => {
        newsArticle.innerHTML = `<p>${clicked}</p>`;
      }, 3000);
    }
  });
}

export default getNewsData;
