import express, { Request, Response, Router } from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const router: Router = express.Router();

// 현재 파일의 디렉토리 경로를 얻기 위해 __dirname 대신 사용
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// newsDatas.json 파일의 경로 설정
const DATA_PATH = path.join(__dirname, 'newsDatas.json');

// GET 요청을 처리하는 라우터
router.get('/', async (req: Request, res: Response) => {
	try {
		const data = fs.readFile(DATA_PATH, 'utf8');
		res.json(JSON.parse(await data));
	} catch (error) {
		res.status(500).json({ message: 'Failed to load data', error: error });
	}
});

export default router;
