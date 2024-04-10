import { renderTimer, renderNewsList, renderNewsContent, renderLoading } from "../view/component.js"
import { getNewsTitles, getNewsContent } from "../model/newsAPI.js";
import { NewsModel } from "../model/newsModel.js";

let increase = null;
const newsModel = new NewsModel();
const runTimer = RunTimer();

function RunTimer() {
    let timer: number = 60;

    const startTimer = () => {
        renderTimer(timer);
        increase = setInterval(() => {
            timer--;
            renderTimer(timer);
            if (timer < 1) {
                clearInterval(increase);
                showSelectNews(newsModel.getNextNews());
            } 
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(increase);
        timer = 60;
    }

    return { startTimer, stopTimer };
}

export const initData = async() => {
    const titleList = await getNewsTitles()
    newsModel.setTitleList(titleList)
    renderNewsList(titleList)
    showSelectNews(newsModel.getNewsData())
}

const showSelectNews = async(select: string) => {
    newsModel.updateNewsIndex(select)
    runTimer.stopTimer()
    renderLoading()
    const selectContent = await getNewsContent(select)
    renderNewsContent(selectContent)
    runTimer.startTimer()
}

export const setEventHandler = (): void => {
    const $updateBtn: Element = document.querySelector(".update-button")
    $updateBtn.addEventListener("click", initData)

    const newsCategory: Element = document.querySelector(".category-list");
    newsCategory.addEventListener("click", async(e) => {
        const selectTitle = (e.target as Element).textContent;
        if ((e.target as Element).className !== "category-list") showSelectNews(selectTitle)
    });
}