interface NewsData {
	articles: Article[];
}
interface Article {
	id: number;
	author: string;
	title: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}
let newsData: Article[] = [];
const titleContainer = document.querySelector('.title-list');
const articleContainer = document.querySelector('.news-article-content');
let currentFetch: Promise<any> | null = null;
async function getNewsList() {
	await fetch('/users')
		.then((response) => response.json())
		.then((data: NewsData) => {
			newsData = data.articles;

			newsData.map((news: Article, index: number) => {
				if (titleContainer) {
					const title = document.createElement('span');
					title.classList.add('title');
					title.textContent = news.title;
					title.addEventListener('click', () => {
						fetchNewsContent(news.id);
						if (title.classList.contains('active')) {
							title.classList.remove('active');
						}
						title.classList.add('active');
					});
					titleContainer.appendChild(title);
				}
				if (index === 0) {
					fetchNewsContent(news.id);
				}
			});
		});
}

async function fetchNewsContent(id: number) {
	if (currentFetch) {
		currentFetch = null;
	}
	if (articleContainer) {
		articleContainer.innerHTML = 'Loading...';
	}
	const newsArticle = newsData.find((news) => news.id === id);
	if (articleContainer) {
		articleContainer.innerHTML = `
		<h3>${newsArticle?.title}</h3>
		${
			newsArticle?.urlToImage
				? `<img src="${newsArticle?.urlToImage}" alt="news-image" class="news-image"  onerror="this.style.display='none';">`
				: ''
		}
		<p class="article">${newsArticle?.content}</p>
		`;
	}
}
export default getNewsList;
