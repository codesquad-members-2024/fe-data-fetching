import getNewsData from './newsDataFetch.js';
import { createListHTML, createDetailNewsHTML } from './contents.js';
import eventHandler from './eventHandler.js';

document.addEventListener('DOMContentLoaded', async () => {
    const { status, articles: newsData } = await getNewsData();

    if (status === 'ok') {
        createListHTML(newsData);
        createDetailNewsHTML(newsData[0]);
    }
    eventHandler();
});
