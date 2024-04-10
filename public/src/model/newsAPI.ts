const getNewsTitles = async() => {
    const titleList = []

    const promise = await fetch("http://localhost:3000/newsTitle")
        .then((response) => response.json())
        .then((json) => titleList.push(...json));

    return titleList
};

export {getNewsTitles}
