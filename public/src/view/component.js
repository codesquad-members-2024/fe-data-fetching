var renderTimer = function (time) {
    var timerContainer = document.querySelector(".current-second");
    timerContainer.textContent = "".concat(time, "\uCD08\uB4A4\uC5D0 \uC790\uB3D9 \uC5C5\uB370\uC774\uD2B8");
};
var renderNewsList = function (list) {
    var listContainer = document.querySelector(".category-list");
    var listTemplate = list.reduce(function (acc, curList) {
        return acc + "<li>".concat(curList.title, "</li>");
    }, "");
    listContainer.innerHTML = listTemplate;
};
var renderNewsContent = function (selectContent) {
    var mainNewsContainer = document.querySelector(".main-news-section");
    mainNewsContainer.innerHTML = "\n    <div class=\"main-news-title\">".concat(selectContent.title, "</div>\n    <div class=\"main-news-content\">").concat(selectContent.content, "</div>\n    ");
};
var renderLoading = function () {
    var mainNewsContainer = document.querySelector(".main-news-section");
    mainNewsContainer.innerHTML = "<div class = \"loading\">Loading...</div>";
};
export { renderTimer, renderNewsList, renderNewsContent, renderLoading };
