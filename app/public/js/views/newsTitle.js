var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetchNews from "../apis/newsList.js";
const url = "http://localhost:3001/news";
function renderTitle() {
    return __awaiter(this, void 0, void 0, function* () {
        const $newsWrap = document.querySelector(".news-main__title-list-wrap");
        const newsList = yield fetchNews();
        if ($newsWrap) {
            $newsWrap.innerHTML = newsList === null || newsList === void 0 ? void 0 : newsList.reduce((prev, curr) => {
                prev += `<li><a href=${url}/${curr.id}>${curr.title}</a></li>`;
                return prev;
            }, "");
        }
        onClickNews($newsWrap);
    });
}
function onClickNews($newsWrap) {
    return __awaiter(this, void 0, void 0, function* () {
        $newsWrap.addEventListener("click", (e) => {
            e.preventDefault();
            const $target = e.target;
            if ($target.tagName === "A") {
                console.log($target.href);
            }
        });
    });
}
export { renderTitle };
