var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let newsData = [];
const titleContainer = document.querySelector('.title-list');
const articleContainer = document.querySelector('.news-article-content');
let currentFetch = null;
function getNewsList() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch('/users')
            .then((response) => response.json())
            .then((data) => {
            newsData = data.articles;
            newsData.map((news, index) => {
                if (titleContainer) {
                    const title = document.createElement('span');
                    title.classList.add('title');
                    title.textContent = news.title;
                    title.addEventListener('click', () => {
                        fetchNewsContent(news.id);
                    });
                    titleContainer.appendChild(title);
                }
                if (index === 0) {
                    fetchNewsContent(news.id);
                }
            });
        });
    });
}
function fetchNewsContent(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (currentFetch) {
            currentFetch = null;
        }
        if (articleContainer) {
            articleContainer.innerHTML = 'Loading...';
        }
        const newsArticle = newsData.find((news) => news.id === id);
        if (articleContainer) {
            articleContainer.innerHTML = `
		<h3>${newsArticle === null || newsArticle === void 0 ? void 0 : newsArticle.title}</h3>
		${(newsArticle === null || newsArticle === void 0 ? void 0 : newsArticle.urlToImage)
                ? `<img src="${newsArticle === null || newsArticle === void 0 ? void 0 : newsArticle.urlToImage}" alt="news-image" class="news-image"  onerror="this.style.display='none';">`
                : ''}
		<p class="article">${newsArticle === null || newsArticle === void 0 ? void 0 : newsArticle.content}</p>
		`;
        }
    });
}
export default getNewsList;
