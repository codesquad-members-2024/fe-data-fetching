const getNewsTitles = async () => {
    const response = await fetch("http://localhost:3000/newsTitle");
    const json = await response.json();
    return json;
};

const getNewsContent = async (selectTitle: string) => {
    const response = await fetch("http://localhost:3000/newsContents");
    const json = await response.json();
    const selectNewsContent = json.find(curContent => curContent.title === selectTitle);
    return selectNewsContent
};

export { getNewsTitles, getNewsContent };