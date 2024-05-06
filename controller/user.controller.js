import data from "../data.js";

export default function viewUser(req, res, next) {
    res.send(data["current-user"]);
}

export function viewTweetsByUsername(req, res, next) {
    const { username } = req.params;
    const tweets = data.tweets.filter(tweet => tweet.user.userName === username);
    if (tweets.length > 0) {
        res.json(tweets);
    } else {
        res.status(404).json({ message: "No tweets found for the specified username" });
    }
}
