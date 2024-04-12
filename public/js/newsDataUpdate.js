import getNewsData from './newsDataFetch.js';
import { createListHTML, createDetailNewsHTML } from './contents.js';
import { eventHandler, displayCountdown } from './eventHandler.js';

const getNewsSequence = async () => {
    const { status, articles: newsData } = await getNewsData();

    if (status === 'ok') {
        createListHTML(newsData);
        createDetailNewsHTML(newsData[0]);
    }
    eventHandler();
    displayCountdown();
};

export default getNewsSequence;
