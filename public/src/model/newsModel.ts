interface NewsItem {
    id: number;
    title: string;
}

export class NewsModel {
    newsTitleList: NewsItem[];
    currentIndex: number;

    constructor() {
        this.newsTitleList = [];
        this.currentIndex = 0;
    }

    getNewsData() {
        if (this.currentIndex >= this.newsTitleList.length) this.currentIndex = 0
        return this.newsTitleList[this.currentIndex].title;
    }

    getNextNews() {
        this.currentIndex++;
        return this.getNewsData();
    }
    
    updateNewsIndex(selectTiTle: string) {
        const selectIdx = this.newsTitleList.findIndex(data => data.title === selectTiTle)
        this.currentIndex = selectIdx
    }

    setTitleList(list: NewsItem[]) {
        this.newsTitleList = list;
        this.currentIndex = 0;
    }
}
