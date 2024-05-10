import data from "../data.js";
export default function twitterController(req, res, next) {
    res.json(data.tweets);
}

export function addTwitter(req, res, next) {
    const newTweet = req.body;
    let id = Math.round(Math.random() *10000).toString();
    data.tweets.push({id, ...newTweet});
    res.json(data.tweets.reverse());
}
