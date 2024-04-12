const REQUEST_DELAY = 2000
let controller = null;

const getNewsContent = async (selectTitle: string) => {
    if (controller) controller.abort();

    controller = new AbortController();

    try {
        const response = await fetch("http://localhost:3000/newsContents", { signal: controller.signal });
        await delay(REQUEST_DELAY);
        const json = await response.json();
        const selectNewsContent = json.find(curContent => curContent.title === selectTitle);
        return selectNewsContent;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    } finally {
        controller = null;
    }
};

const getNewsTitles = async () => {
    const response = await fetch("http://localhost:3000/newsTitle");
    const json = await response.json();
    return json;
};

const delay = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms))

export { getNewsTitles, getNewsContent };