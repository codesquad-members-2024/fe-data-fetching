const listTextBold = (id) => {
    const listTarget = document.querySelector('.section__left__news_title');
    Array.from(listTarget.children).forEach((li) => {
        if (li.getAttribute('article-id') !== id.toString()) li.classList.remove('selected');
        if (li.getAttribute('article-id') === id.toString()) li.classList.add('selected');
    });
};

const createLi = (content) => {
    const { id, title } = content;
    return `<li article-id="${id}" class="">
                <a href="#" class="news_title__link__item" role="tab" aria-selected="false">
                    <span>${title}</span>
                </a>
            </li>`;
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

const createDetailNewsHTML = ({ content, id }) => {
    const detailNewsTarget = document.querySelector('.section__right__article');
    detailNewsTarget.innerHTML = content;
    detailNewsTarget.setAttribute('article-id', id);
    listTextBold(id);
};

export { createListHTML, createDetailNewsHTML };
