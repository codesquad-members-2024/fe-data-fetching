import { renderTimer, renderNewsList } from "../view/component.js"
import { getNewsTitles } from "../model/newsAPI.js";

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
}

const showTargetNews = () => {
    // 3. 뉴스 리스트의 첫번째 기사를 보여줄 함수
}

export const setEventHandler = (): void => {
    const $updateBtn: Element = document.querySelector(".update-button")
    $updateBtn.addEventListener("click", updateNews)

    const newsCategory: Element = document.querySelector(".category-list")
    newsCategory.addEventListener("click", showTargetNews)
}


