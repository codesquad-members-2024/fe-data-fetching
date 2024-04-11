import delay from "./delay.js";


async function getNewsData() {
  try {
    const response = await fetch("/news");
    const data = await response.json();

    const shuffle = () => Math.random() - 0.5;
    const shuffledData = data.articles.sort(shuffle);

    const titleList = document.querySelector(".title-list");
    const newsArticle = document.querySelector(".news-article");

    if (titleList !== null) {
      titleList.innerHTML = "";
    }

    shuffledData.forEach((item) => {
      titleList.innerHTML += `<p>${item.title}</p>`;
    });

    titleEventListener(titleList, newsArticle, shuffledData);

    const firstPTag = titleList.querySelectorAll("p")[0];
    firstPTag.click();
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}

// function titleEventListener(titleList, newsArticle, data) {
//   // let clickTitle;

//   titleList.addEventListener("click", async function (event) {
//     // if (clickTitle !== null) {
//     //   clearTimeout(clickTitle);
//     //   clickTitle = null; // delay 사용 후 clear 해줄 때 null 처리 꼭
//     // }

//     const { target } = event;
//     if (target.tagName === "P") {
//       const index = Array.from(this.children).indexOf(event.target);
//       const { title, description } = data[index];
//       newsArticle.innerHTML = `<div class="loading-text">Loading ...</div>`;

//       // const delay = (ms) => new Promise((resolve) => {
//       //     clickTitle = setTimeout(resolve, ms);
//       // });

//       await delay(3000);
//       newsArticle.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
//     }
//   });
// }
async function titleEventListener(titleList, newsArticle, data) {
  titleList.addEventListener("click", async function (event) {
    const { target } = event;
    if (target.tagName === "P") {
      const index = Array.from(this.children).indexOf(event.target);
      const { title, description } = data[index];
      newsArticle.innerHTML = `<div class="loading-text">Loading ...</div>`;

      await delay(3000);
      newsArticle.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
    }
  });
}
export default getNewsData;
