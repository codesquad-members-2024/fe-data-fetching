fetch("/users")
  .then((response) => response.json())
  .then((data) => {
    const titleList = document.querySelector('.title-list');
    data.articles.forEach((item) => {
      titleList.innerHTML += `
      <p>${item.title}</p>
      `;
      console.log(item.title);
    });
  })
  .catch((error) => console.error("Error fetching news:", error));
