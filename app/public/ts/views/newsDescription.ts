const NEWS_MAX_LENGTH = 300;

function renderNewsDes(news: NewsItem) {
	const $title = document.querySelector(".news-main__des__title") as HTMLElement;
	const $main = document.querySelector(".news-main__des__main") as HTMLElement;
	const $more = document.querySelector(".news-main__des__more > a") as HTMLAnchorElement;

	$title.innerText = news.title;
	$main.innerText = sliceContent(news.content);
	$more.href = news.url;
}

function sliceContent(content: string): string {
	if (content.length > NEWS_MAX_LENGTH) {
		const slicedContent = content.slice(0, NEWS_MAX_LENGTH) + "......";
		return slicedContent;
	}
	return content + "...";
}

export default renderNewsDes;
