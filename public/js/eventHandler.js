import getNewsData from './newsDataFetch.js';
import { createDetailNewsHTML } from './contents.js';
import getNewsSequence from './newsDataUpdate.js';

let setTimeoutId = null;
let setIntervalId = null;

// -   <b>자동 업데이트</b>
// -   [ ] 전체 뉴스 정보는 3초마다 자동으로 갱신된다.
// -   [ ] 다음 갱신 시간까지 타이머가 동작되어 초단위로 화면에 노출된다.

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

const autoUpdate = () => {
    if (setIntervalId !== null) {
        clearInterval(setIntervalId);
    }
    setIntervalId = setInterval(async () => {
        await getNewsSequence();
    }, 3000);
};
export { eventHandler, autoUpdate };
