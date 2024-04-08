// routes/news.js
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.get("/", (req, res, next) => {
    res.sendFile(join(__dirname, '../views/index.html'));
});

export default router;
