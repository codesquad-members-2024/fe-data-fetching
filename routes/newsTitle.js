import express from "express";
import newsTitle from "../public/javascripts/data/newsTitle.json" assert{ type: "json"} ;;

const router = express.Router();

router.get("/", (req, res, next) => {
    res.json(newsTitle);
});

export default router;
