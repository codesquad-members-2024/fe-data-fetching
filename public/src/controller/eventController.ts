import { renderTimer, renderNewsList, renderNewsContent, renderLoading } from "../view/viewRenderer.js"
import { getNewsTitles, getNewsContent } from "../model/newsAPI.js";
import { NewsModel } from "../model/newsModel.js";

const TIMER_INITIAL = 10
const TIME_INTERVAL = 1000
const TIMER_END_VALUE = 1

const newsModel = new NewsModel();
const timer = Timer();

function Timer() {
    let increase = null;
    let timer = TIMER_INITIAL;

    const startTimer = () => {
        renderTimer(timer);
        increase = setInterval(() => {
            timer--;
            renderTimer(timer);
            if (timer < TIMER_END_VALUE) {
                clearInterval(increase);
                initData()
            } 
        }, TIME_INTERVAL);
    }

    const stopTimer = () => {
        clearInterval(increase);
        renderLoading()
        timer = TIMER_INITIAL;
    }

    return { startTimer, stopTimer };
}

export const initData = async() => {
    const titleList = await getNewsTitles();
    newsModel.setTitleList(titleList.sort(() => Math.random() - 0.5))
    renderNewsList(titleList)
    await showSelectNews(newsModel.getNewsData())
}

const showSelectNews = async(select: string) => {
    timer.stopTimer()

    try {
        newsModel.updateNewsIndex(select)
        const selectContent = await getNewsContent(select)
        renderNewsContent(selectContent)
        timer.startTimer()
    } catch(error) {
        console.log("getContent error", error)
    }
}

export const setEventHandler = (): void => {
    const updateBtn: HTMLButtonElement = document.querySelector(".update-button")
    updateBtn.addEventListener("click", async () => {
        updateBtn.disabled = true;
        try {
            await initData();
        } catch (error) {
            console.log("initData error", error);
        } finally {
            updateBtn.disabled = false;
        }
    });

    const newsCategory: Element = document.querySelector(".category-list");
    newsCategory.addEventListener("click", async(e) => {
        const selectTitle = (e.target as Element).textContent;
        if ((e.target as Element).className !== "category-list") showSelectNews(selectTitle)
    });
}