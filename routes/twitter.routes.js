import { Router } from "express";
import  twitterController, { addTwitter }  from "../controller/twitter.controller.js";
import viewUser, { viewTweetsByUsername } from "../controller/user.controller.js";


const route = Router();
route.get('/users/:username', viewTweetsByUsername)
route.get('/tweets', twitterController)
route.get('/user/', viewUser)
route.post('/tweets', addTwitter)
export default route;