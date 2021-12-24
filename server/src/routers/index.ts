import express from 'express';
import controller from '../controllers/postControllers';
import userController from "../controllers/userControllers"
import { isNotAuth, isAuth, currentUser } from '../config/authMiddleware';
export const router = express.Router();

router.get('/posts', isNotAuth, controller.getPosts);
router.get('/sessions',isNotAuth, controller.getSessions)
// router.get('/posts/:id', controller.getPost);
// router.put('/posts/:id', controller.updatePost);
// router.delete('/posts/:id', controller.deletePost);
// router.post('/posts', controller.addPost);



// import express, { Request, Response } from "express";
// export const router = express.Router()
// import axios from "axios"
// import { config } from "dotenv";



// var options : API_Request = {
//   method: 'GET',
//   url: 'https://crypto-news-live.p.rapidapi.com/news',
//   headers: {
//     'x-rapidapi-host': process.env.BASE_URL,
//     'x-rapidapi-key': process.env.RAPID_API_KEY
//   }
// };


router.post("/register", userController.registerUser)
router.post("/login", userController.loginUser)
router.get("/logout", userController.logoutUser)