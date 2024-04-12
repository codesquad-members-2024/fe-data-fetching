import getNewsData from './newsDataFetch.js';
import { createDetailNewsHTML } from './contents.js';
import getNewsSequence from './newsDataUpdate.js';

const AUTO_UPDATE_MILLISEC = 3000;
let setTimeoutId = null;
let updateIntervalId = null;
let countdownIntervalId = null;
let secUntilUpdate = (AUTO_UPDATE_MILLISEC / 1000) % 60;

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
    autoUpdate();
    const { target } = e;
    const liTarget = target.closest('li');
    if (!liTarget) return;

    changeAttrOfSelected(liTarget);

    const id = liTarget.getAttribute('article-id');
    const newsData = await getNewsData(id);

    createDetailNewsHTML({ content: 'loading..', id });
    await delay(1500);
    createDetailNewsHTML({ ...newsData, id });
};

const eventHandler = () => {
    document.querySelector('.section__left__news_title').addEventListener('click', getArticle);
    document.querySelector('#update-btn').addEventListener('click', getNewsSequence);
};

const displayCountdown = () => {
    const descrptionTarget = document.querySelector('#update-sec');

    if (countdownIntervalId !== null) clearInterval(countdownIntervalId);

    secUntilUpdate = (AUTO_UPDATE_MILLISEC / 1000) % 60;
    descrptionTarget.innerHTML = secUntilUpdate;

    countdownIntervalId = setInterval(() => {
        secUntilUpdate--;
        descrptionTarget.innerHTML = secUntilUpdate;
        if (secUntilUpdate <= 0) clearInterval(countdownIntervalId);
    }, 1000);
};

const autoUpdate = () => {
    if (updateIntervalId !== null) {
        clearInterval(updateIntervalId);
    }

    displayCountdown();

    updateIntervalId = setInterval(async () => {
        await getNewsSequence();
    }, AUTO_UPDATE_MILLISEC);
};
export { eventHandler, autoUpdate, displayCountdown };
