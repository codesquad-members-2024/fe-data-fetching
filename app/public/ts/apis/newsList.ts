const url: string = "http://localhost:3000/news";

async function fetchNews(): Promise<NewsItem[] | undefined> {
	try {
		const res = await fetch(url);
		const news = await res.json();
		return news;
	} catch (error) {
		console.log("뉴스를 불러오지 못했습니다");
	}
}

export default fetchNews;
