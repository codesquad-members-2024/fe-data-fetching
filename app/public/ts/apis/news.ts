const url = "http://localhost:3000/news";

async function fetchTotalNews(): Promise<NewsItem[] | undefined> {
	try {
		const res = await fetch(url);
		const news = await res.json();
		return news;
	} catch (error) {
		console.error("뉴스를 불러오지 못했습니다");
	}
}

async function fetchSingleNews(id: string): Promise<NewsItem | undefined> {
	try {
		const res = await fetch(`${url}/${id}`);
		const newsDetail = await res.json();
		return newsDetail;
	} catch (error) {
		console.error("뉴스를 불러오지 못했습니다");
	}
}

export { fetchTotalNews, fetchSingleNews };
