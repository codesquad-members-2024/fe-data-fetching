const newsData = require('../public/data/newsDatas.json');
const express = require('express');
const router = express.Router();

// res.render 함수 : 서버에서 HTML 뷰를 렌더링하기 위해 사용 (템플릿에 변수를 전달)
// res.json 함수 : JSON 데이터를 클라이언트에게 전송하기 위해 사용

const shuffleArticles = (articles) => articles.sort(() => 0.5 - Math.random());

const randomSliceNewsData = (newsData) => {
    newsData.articles = shuffleArticles(newsData.articles).slice(0, 9);
    return newsData;
};

/* GET 뉴스 데이터 */
router.get('/', function (req, res, next) {
    const id = parseInt(req.query.id);

    const newsItem = newsData.articles.find((news) => news.id === id);
    if (newsItem) {
        res.json(newsItem);
        return;
    }

    const LimitNewsData = randomSliceNewsData(newsData);
    res.json(LimitNewsData);
});

module.exports = router;
