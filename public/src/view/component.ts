interface NewsItem {
    id: number;
    title: string;
}

const renderTimer = (time: number): void => {
    const timerContainer: HTMLElement = document.querySelector(".current-second");
    timerContainer.textContent = `${time}초뒤에 자동 업데이트`;
};

const renderNewsList = (list: NewsItem[]) => {
    const listContainer = document.querySelector(".category-list");
    const listTemplate = list.reduce((acc, curList) => {
        return acc + `<li>${curList.title}</li>`;
    }, "");
    listContainer.innerHTML = listTemplate;
}

const renderNewsContent = (selectContent) => {
    const mainNewsContainer = document.querySelector(".main-news-section")
    mainNewsContainer.innerHTML = `
    <div class="main-news-title">${selectContent.title}</div>
    <div class="main-news-content">${selectContent.content}</div>
    `
}

const renderLoading = () => {
    const mainNewsContainer = document.querySelector(".main-news-section")
    mainNewsContainer.innerHTML = `<div class = "loading">Loading...</div>`
}


export { renderTimer, renderNewsList, renderNewsContent, renderLoading }