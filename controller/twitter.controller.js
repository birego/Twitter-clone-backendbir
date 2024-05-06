import data from "../data.js";
export default function twitterController(req, res, next) {
    res.json(data.tweets);
}