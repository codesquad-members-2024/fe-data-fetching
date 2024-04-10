var NewsModel = /** @class */ (function () {
    function NewsModel() {
        this.newsTitleList = [];
        this.currentIndex = 0;
    }
    NewsModel.prototype.getNewsData = function () {
        if (this.currentIndex >= this.newsTitleList.length)
            this.currentIndex = 0;
        return this.newsTitleList[this.currentIndex].title;
    };
    NewsModel.prototype.getNextNews = function () {
        this.currentIndex++;
        return this.getNewsData();
    };
    NewsModel.prototype.updateNewsIndex = function (selectTiTle) {
        var selectIdx = this.newsTitleList.findIndex(function (data) { return data.title === selectTiTle; });
        this.currentIndex = selectIdx;
    };
    NewsModel.prototype.setTitleList = function (list) {
        this.newsTitleList = list;
        this.currentIndex = 0;
    };
    return NewsModel;
}());
export { NewsModel };
