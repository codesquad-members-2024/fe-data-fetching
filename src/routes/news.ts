import express from 'express';
import getNewsData from './data/newsService';

const router = express.Router();

/* GET 모든 뉴스 데이터 */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let allNewsData = getNewsData;

    // res.render('index', { title: 'Express', allNewsData });
    res.json(allNewsData);
});

/* GET 특정 ID의 뉴스 데이터 */
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const allNewsData = getNewsData;

    // const newsItem = allNewsData.articles.find((news: { id: number }) => news.id === id); //news 객체가 id 속성을 가지고 있고 && 그 타입이 number임
    // if (newsItem) res.json(newsItem);
});

export default router;

// res.render 함수 : 서버에서 HTML 뷰를 렌더링하기 위해 사용 (템플릿에 변수를 전달)
// res.json 함수 : JSON 데이터를 클라이언트에게 전송하기 위해 사용
