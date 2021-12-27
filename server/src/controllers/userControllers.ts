import {Request, Response } from "express";
const bcrypt = require('bcrypt');
import User from "../models/user"
import * as EmailValidator from 'email-validator';

declare module 'express-session' {
    interface Session {
        [key: string]: any;
    }
  }

const registerUser = async (req: Request, res: Response)=> {

    const { username, email, password }: { username: string; email: string; password: string } = req.body; 
    const isPasswordValid = (password:string) => {
        const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
        return regExp.test(password);
      };
    const isEmailValid = EmailValidator.validate(email); // true

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
    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) return res.send({error: "Incorrect password!"});
    
    req.session.isAuth = true;
    req.session.userEmail = email;
    console.log(req.session)

    res.send({msg: email})
}

const logoutUser = async(req:Request, res: Response)=>{
    req.session.destroy((error)=>{
        
        if (error) throw error;
        res.send("You are logged out")  
    });
    
}

export default {registerUser, loginUser, logoutUser}