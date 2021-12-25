import express from 'express';
import controller from '../controllers/postControllers';
import userController from "../controllers/userControllers"
import { isNotAuth, isAuth, currentUser } from '../config/authMiddleware';
export const router = express.Router();

router.get('/api/posts', controller.getPosts);
router.get('/api/sessions',isNotAuth, controller.getSessions)
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


router.post("/api/register", userController.registerUser)
router.post("/api/login", userController.loginUser)
router.get("/api/logout", userController.logoutUser)