const createLi = (content) => {
    const { id, title } = content;
    return `<li id="${id}">${title}</li>`;
};

const createListHTML = (newsDatas) => {
    const listHTML = newsDatas.reduce((acc, cur) => {
        const content = { id: cur.id, title: cur.title };
        acc += createLi(content);
        return acc;
    }, '');

    const listTarget = document.querySelector('.section__left__news_title');
    listTarget.innerHTML = listHTML;
};

const createDetailNewsHTML = ({ content }) => {
    const detailNewsTarget = document.querySelector('.section__right__article');
    detailNewsTarget.innerHTML = content;
};

export { createListHTML, createDetailNewsHTML };
