var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "http://localhost:3000/news";
function fetchNews() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch(url);
            const news = yield res.json();
            return news;
        }
        catch (error) {
            console.log("뉴스를 불러오지 못했습니다");
        }
    });
}
export default fetchNews;
