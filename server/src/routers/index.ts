import express from 'express';
import controller from '../controllers/postControllers';
export const router = express.Router();

router.get('/posts', controller.getPosts);
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


