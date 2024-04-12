const express = require("express");
const router = express.Router();

// JSON Server의 기본 URL
const jsonServerUrl = "http://localhost:3001";

// 뉴스 데이터를 가져오는 엔드포인트 설정 요청이 들어오면 응답으로 반환
router.get("/", async (req, res) => {
	res.set("Cache-Control", "public, max-age=30");
	try {
		const newRes = await fetch(`${jsonServerUrl}/news`);
		const news = await newRes.json();
		const slicedNews = news.sort(() => Math.random() - 0.5).slice(0, 10);
		res.send(slicedNews);
	} catch (error) {
		console.error("Error getting news:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

router.get("/:id", async (req, res) => {
	res.set("Cache-Control", "public, max-age=30");
	try {
		const singleNewsRes = await fetch(`${jsonServerUrl}/news/${req.params.id}`);
		const singleNews = await singleNewsRes.json();
		res.send(singleNews);
	} catch (e) {
		console.error("Error getting news:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = router;
