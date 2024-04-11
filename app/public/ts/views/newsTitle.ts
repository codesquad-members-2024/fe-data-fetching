import fetchNews from "../apis/newsList.js";

const url: string = "http://localhost:3001/news";

async function renderTitle() {
	const $newsWrap = document.querySelector(".news-main__title-list-wrap") as HTMLElement;
	const newsList = await fetchNews();

	if ($newsWrap) {
		$newsWrap.innerHTML = newsList?.reduce((prev: string, curr: NewsItem) => {
			prev += `<li><a href=${url}/${curr.id}>${curr.title}</a></li>`;
			return prev;
		}, "") as string;
	}

	onClickNews($newsWrap);
}

async function onClickNews($newsWrap: HTMLElement) {
	$newsWrap.addEventListener("click", (e) => {
		e.preventDefault();
		const $target = e.target as HTMLAnchorElement;
		if ($target.tagName === "A") {
			console.log($target.href);
		}
	});
}

export { renderTitle };
