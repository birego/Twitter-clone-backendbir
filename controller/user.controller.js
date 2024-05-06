import data from "../data.js";

export default function viewUser(req, res, next) {
    res.send(data["current-user"])
}