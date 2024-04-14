import { toggleLoading } from "./loading.js";
import { delay, fetchData } from "./utils.js";
import { displayNewsList, displayNewsContent } from "./render.js";
import { resetTimer } from "./update.js";
import { RESPONSE_DELAY } from "../constants/constants.js";

export async function displayInitialPage() {
  toggleLoading(true);
  await delay(RESPONSE_DELAY);
  const newsTitleList = await fetchData("/api/news/list");
  const firstNewsId = newsTitleList[0].id;
  const selectedNews = await fetchData(`/api/news/${firstNewsId}`);
  toggleLoading(false);
  resetTimer();
  displayNewsList(newsTitleList, firstNewsId);
  displayNewsContent(selectedNews);
  return newsTitleList;
}
