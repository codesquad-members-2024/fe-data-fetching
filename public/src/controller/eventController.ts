import { renderTimer, renderNewsList, renderNewsContent, renderLoading } from "../view/viewRenderer.js"
import { getNewsTitles, getNewsContent } from "../model/newsAPI.js";
import { NewsModel } from "../model/newsModel.js";

const TIMER_INITIAL = 10
const TIME_INTERVAL = 1000
const TIMER_END_VALUE = 1

let increase = null;
const newsModel = new NewsModel();
const runTimer = RunTimer();

function RunTimer() {
    let timer: number = TIMER_INITIAL;

    const startTimer = () => {
        renderTimer(timer);
        increase = setInterval(() => {
            timer--;
            renderTimer(timer);
            if (timer < TIMER_END_VALUE) {
                clearInterval(increase);
                showSelectNews(newsModel.getNextNews());
            } 
        }, TIME_INTERVAL);
    }

    const stopTimer = () => {
        clearInterval(increase);
        timer = TIMER_INITIAL;
    }

    return { startTimer, stopTimer };
}

export const initData = async() => {
    console.log(11)
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
    const $updateBtn: HTMLButtonElement = document.querySelector(".update-button")
    $updateBtn.addEventListener("click", async() => {
        if (!$updateBtn.disabled) {
            $updateBtn.disabled = true;
            await initData()
            $updateBtn.disabled = false;
        }
    });

    const newsCategory: Element = document.querySelector(".category-list");
    newsCategory.addEventListener("click", async(e) => {
        const selectTitle = (e.target as Element).textContent;
        if ((e.target as Element).className !== "category-list") showSelectNews(selectTitle)
    });
}