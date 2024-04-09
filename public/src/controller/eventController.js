import { getTimerTemplate } from "../view/component.js";
function newsTimer() {
    var timer = 0;
    var renderTimer = function () {
        var timerTemplate = getTimerTemplate(timer);
        console.log(timerTemplate);
        var timerContainer = document.querySelector(".current-second");
        timerContainer.textContent = timerTemplate;
    };
    var increase = setInterval(function () {
        renderTimer();
        ++timer;
    }, 1000);
    var resetTimer = function () {
        timer = 0;
        renderTimer();
    };
    resetTimer();
}
export var updateNews = function () {
    newsTimer();
    // 2. 뉴스 리스트를 보여줄 함수
    // 3. 뉴스 리스트의 첫번째 기사를 보여줄 함수
};
var showTargetNews = function () { };
export var setEventHandler = function () {
    var $updateBtn = document.querySelector(".update-button");
    $updateBtn.addEventListener("click", updateNews);
    var newsCategory = document.querySelector(".category-list");
    newsCategory.addEventListener("click", showTargetNews);
};
