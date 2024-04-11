import getNewsData from './newsDataFetch.js';
import { createDetailNewsHTML } from './contents.js';

const getArticle = async (e) => {
    const { target } = e;
    if (!target.closest('li')) return;

    const id = target.closest('li').getAttribute('id');
    const newsData = await getNewsData(id);
    createDetailNewsHTML(newsData);
};

const eventHandler = () => {
    document.querySelector('.section__left__news_title').addEventListener('click', getArticle);
};

export default eventHandler;
