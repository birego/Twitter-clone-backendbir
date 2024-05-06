import data from "../data.js";
export default function twitterController(req, res, next) {
    res.json(data.tweets);
}

export function addTwitter(req, res, next) {
    const newTweet = req.body;
    data.tweets.push(newTweet);
    res.json(data.tweets);
}
