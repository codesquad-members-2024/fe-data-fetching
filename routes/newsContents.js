import express from "express";
import newsContents from "../public/src/data/newsContents.json" assert{ type: "json"} ;;

const router = express.Router();

router.get("/", (req, res, next) => {
    res.json(newsContents);
});

export default router;
