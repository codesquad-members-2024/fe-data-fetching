import delay from "./utils/delay.js";
import { onClickRefresh, setTimer } from "./views/header.js";
import renderNewsDes from "./views/newsDescription.js";
import { renderTitle, onClickNewsTitle } from "./views/newsTitle.js";

await renderTitle();
onClickNewsTitle(renderNewsDes, delay);
onClickRefresh(renderTitle,delay);
setTimer();
