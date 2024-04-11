const getNewsData = async (id) => {
    const primaryKey = id ?? '';
    const path = `http://localhost:3000/news?id=${primaryKey}`;
    const newsData = await fetch(path);

    return newsData.json();
};

export default getNewsData;
