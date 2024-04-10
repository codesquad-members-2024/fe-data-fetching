import { renderTimer, renderNewsList, renderNewsContent } from "../view/component.js"
import { getNewsTitles, getNewsContent } from "../model/newsAPI.js";

function runTimer() {
    let timer: number = 0;

    const increase = setInterval(() => {
        ++timer;
        renderTimer(timer);
    }, 1000);

    const resetTimer = () => {
        timer = 0
        renderTimer(timer)
    }

    resetTimer();
}

export const updateNews = async() => {
    runTimer()
    const titleList = await getNewsTitles()
    renderNewsList(titleList)
    showSelectNews(titleList[0].title)
}

const showSelectNews = async(select: string) => {
    const selectContent = await getNewsContent(select)
    renderNewsContent(selectContent)
}

export const setEventHandler = (): void => {
    const $updateBtn: Element = document.querySelector(".update-button")
    $updateBtn.addEventListener("click", updateNews)

    const newsCategory: Element = document.querySelector(".category-list");
    newsCategory.addEventListener("click", (e) => {
        const selectTitle = (e.target as Element).textContent;
        if ((e.target as Element).className !== "category-list") showSelectNews(selectTitle)
    });
}


