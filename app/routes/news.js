var express = require("express");
var router = express.Router();

// JSON Server의 기본 URL
const jsonServerUrl = "http://localhost:3001";

// JSON Server로부터 뉴스 데이터를 가져오는 함수
async function fetchNews() {
	try {
		const res = await fetch(`${jsonServerUrl}/news`);
		return await res.json();
	} catch (error) {
		console.error("뉴스가 존재하지 않습니다");
		return [];
	}
}

// 뉴스 데이터를 가져오는 엔드포인트 설정 요청이 들어오면 응답으로 반환
router.get("/", async (req, res) => {
	try {
		const news = await fetchNews();
		const slicedNews = news.sort(() => Math.random() - 0.5).slice(0, 10);
		res.send(slicedNews);
	} catch (error) {
		console.error("Error getting news:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = router;
