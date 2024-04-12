var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const router = express.Router();
// 현재 파일의 디렉토리 경로를 얻기 위해 __dirname 대신 사용
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// newsDatas.json 파일의 경로 설정
const DATA_PATH = path.join(__dirname, 'newsDatas.json');
// GET 요청을 처리하는 라우터
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = fs.readFile(DATA_PATH, 'utf8');
        res.json(JSON.parse(yield data));
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to load data', error: error });
    }
}));
export default router;
