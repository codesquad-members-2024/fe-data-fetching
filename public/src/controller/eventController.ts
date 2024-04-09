import { getTimerTemplate } from "../view/component.js"

function newsTimer() {
    let timer: number = 0;

    const renderTimer = (): void => {
        const timerTemplate: string = getTimerTemplate(timer);
        const timerContainer: HTMLElement = document.querySelector(".current-second");
        timerContainer.textContent = timerTemplate;
    };

    const increase = setInterval(() => {
        renderTimer();
        ++timer;
    }, 1000);

    const resetTimer = () => {
        timer = 0
        renderTimer()
    }

    resetTimer();
}

export const updateNews = () => {
    newsTimer()
    // 2. 뉴스 리스트를 보여줄 함수
    // 3. 뉴스 리스트의 첫번째 기사를 보여줄 함수
}

const showTargetNews = () => {}

export const setEventHandler = (): void => {

    const $updateBtn: Element = document.querySelector(".update-button")
    $updateBtn.addEventListener("click", updateNews)

    const newsCategory: Element = document.querySelector(".category-list")
    newsCategory.addEventListener("click", showTargetNews)
}


