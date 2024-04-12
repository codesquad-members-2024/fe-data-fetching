import getNewsData from './newsDataFetch.js';
import { createDetailNewsHTML } from './contents.js';

let setTimeoutId = null;

const delay = (ms) =>
    new Promise((resolve) => {
        if (setTimeoutId !== null) {
            clearTimeout(setTimeoutId);
        }

        setTimeoutId = setTimeout(resolve, ms);
    });

const changeAttrOfSelected = (liTarget) => {
    const aTag = liTarget.querySelector('a');
    if (aTag) aTag.setAttribute('aria-selected', 'true');

    Array.from(liTarget.parentNode.children).forEach((li) => {
        if (li !== liTarget) {
            const siblingATag = li.querySelector('a');
            if (siblingATag) siblingATag.setAttribute('aria-selected', 'false');
        }
    });
};

const getArticle = async (e) => {
    const { target } = e;
    const liTarget = target.closest('li');
    if (!liTarget) return;

    changeAttrOfSelected(liTarget);

    const id = liTarget.getAttribute('id');
    const newsData = await getNewsData(id);

    createDetailNewsHTML({ content: 'loading..' });
    await delay(1500);
    createDetailNewsHTML(newsData);
};

const eventHandler = () => {
    document.querySelector('.section__left__news_title').addEventListener('click', getArticle);
};

export default eventHandler;
