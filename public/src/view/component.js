var getTimerTemplate = function (curTime) {
    return "".concat(curTime, "\uCD08\uB4A4\uC5D0 \uC790\uB3D9 \uC5C5\uB370\uC774\uD2B8");
};
var renderTimer = function (time) {
    var timerTemplate = getTimerTemplate(time);
    var timerContainer = document.querySelector(".current-second");
    timerContainer.textContent = timerTemplate;
};
var renderNewsList = function (list) {
    var listContainer = document.querySelector(".category-list");
    var listTemplate = list.reduce(function (acc, curList) {
        return acc + "<li>".concat(curList.title, "</li>");
    }, "");
    listContainer.innerHTML = listTemplate;
};
export { getTimerTemplate, renderTimer, renderNewsList };
