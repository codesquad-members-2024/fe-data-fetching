import { renderTimer, renderNewsList, renderNewsContent, renderLoading } from "../view/component.js"
import { getNewsTitles, getNewsContent } from "../model/newsAPI.js";

function RunTimer() {
    let timer: number = 0;

    const increase = setInterval(() => {
        renderTimer(timer);
        ++timer;
    }, 1000);

    const resetTimer = () => {
        timer = 0
        renderTimer(timer)
    }

    return {resetTimer}
}

const runTimer = RunTimer()

export const updateNews = async() => {
    const titleList = await getNewsTitles()
    runTimer.resetTimer()
    renderNewsList(titleList)
    showSelectNews(titleList[0].title)
}

const showSelectNews = async(select: string) => {
    renderLoading()
    const selectContent = await getNewsContent(select)
    renderNewsContent(selectContent)
    runTimer.resetTimer()
}

export const setEventHandler = (): void => {
    const $updateBtn: Element = document.querySelector(".update-button")
    $updateBtn.addEventListener("click", updateNews)

    const newsCategory: Element = document.querySelector(".category-list");
    newsCategory.addEventListener("click", async(e) => {
        const selectTitle = (e.target as Element).textContent;
        if ((e.target as Element).className !== "category-list") showSelectNews(selectTitle)
    });
}