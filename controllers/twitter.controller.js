import data from "../data.js";

export default function twitterController(req, res, next) {
    try {
        res.json(data.tweets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des tweets." });
    }
}

export function addTwitter(req, res, next) {
    try {
        const newTweet = req.body;

        if (!newTweet || !newTweet.text) {
            throw new Error('Le tweet doit contenir du texte.');
        }

        const id = Math.round(Math.random() * 10000).toString(); // Identifiant aléatoire
        data.tweets.push({ id, ...newTweet });

        res.json(data.tweets.reverse());
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}
