import {Request, Response } from "express";
const bcrypt = require('bcrypt');
import User from "../models/user"
import * as EmailValidator from 'email-validator';
import express from "express";
import session from 'express-session';
import sqlStore from "express-mysql-session";
const app = express()


//session store
const SQLStore = new sqlStore(session)

app.use(session({
    store: new SQLStore({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60, // 1 minute
      sameSite: true
    }
   }));


const registerUser = async (req: Request, res: Response)=> {

    const { username, email, password }: { username: string; email: string; password: string } = req.body; 
    const isPasswordValid = (password:string) => {
        const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
        return regExp.test(password);
      };
    const isEmailValid = EmailValidator.validate(email); // true

    console.log(req.body)
    // const isUserExist = (email:string) => userList.some(user => user.email=== email)
    const user = await User.findOne({ where: { email: email} });

    if(user) return res.send("This user already exists")
    if (!isPasswordValid) { return res.json({error: 'Password must be 8 or more characters.'})}
    if(!isEmailValid){ return res.json({error: "Email should be valid"})}

    const hashedPassword: string = await bcrypt.hash(password, 10)
        try {
            let user = await User.create({
              username,
              email,
              role: "user",
              password: hashedPassword,
            });
            res.send(user)
          } catch (err) {
            return res.json({status: 'error', message: 'Email address already exists.'});
          }
    }

const loginUser = async (req:Request, res:Response)=>{
    
    const { email, password }: { email: string; password: string } = req.body; 

    const user = await User.findOne({ where: { email: email } });
    if (user === null) return res.send({ error: "Username or email can not be found" });

    // compare the password to the hashed password in the DB
    const correctPassword = await bcrypt.compare(password, user?.password);
    if (!correctPassword) return res.status(400).send("Incorrect password!");

    req.session.isAuth = true;
    req.session.userEmail = email;
    res.send(req.session)
}

const logoutUser = async(req:Request, res: Response)=>{
    req.session.destroy((error)=>{
        
        if (error) throw error;
        res.send("You are logged out")  
    });
    
}

export default {registerUser, loginUser, logoutUser}