import express from "express";
import newsContents from "../public/src/data/newsContents.json" assert{ type: "json"} ;;

const router = express.Router();

router.get("/", (req, res, next) => {
    try{
        res.set('Cache-Control', 'public, max-age=30')
        res.json(newsContents);
    } catch (error) {
        console.log("Cache error", error)
    }
});

export default router;
