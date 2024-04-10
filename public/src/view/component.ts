interface NewsItem {
    id: number;
    title: string;
}

const getTimerTemplate = (curTime: number): string => {
    return `${curTime}초뒤에 자동 업데이트`
}

const renderTimer = (time: number): void => {
    const timerTemplate: string = getTimerTemplate(time);
    const timerContainer: HTMLElement = document.querySelector(".current-second");
    timerContainer.textContent = timerTemplate;
};

const renderNewsList = (list: NewsItem[]) => {
    const listContainer = document.querySelector(".category-list");
    const listTemplate = list.reduce((acc, curList) => {
        return acc + `<li>${curList.title}</li>`;
    }, "");
    listContainer.innerHTML = listTemplate;
}


export { getTimerTemplate, renderTimer, renderNewsList }