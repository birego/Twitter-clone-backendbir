import { Router } from "express";
import twitterController from "../controller/twitter.controller.js";
import viewUser from "../controller/user.controller.js";


const route = Router();
route.get('/tweet', twitterController)
route.get('/users', viewUser)
export default route;