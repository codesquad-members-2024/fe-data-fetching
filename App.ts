import express from "express";
import path from "path";
import indexRouter from "./routes/index.js";
import newsRouter from './routes/news.js';
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port: number = 3000;

app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));

app.use("/", indexRouter);
app.use("/news", newsRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});