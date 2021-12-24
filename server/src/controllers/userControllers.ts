import {Request, Response } from "express";
import bcrypt  from "bcryptjs"


const userList = [
    {username: "Esref", email: "esref@esref.com"},  
    {username: "Emir", email: "emir@emir.com"}
]

const registerUser = async (req: Request, res: Response)=> {

    const { username, email, password } = req.body; 
    console.log(req.body)

    // check if the user exists from emails 

    const isUserExist = (email:string) => userList.some(user => user.email=== email)

    if(isUserExist(email)){
        
        res.send("the user exists")

    } else {

        const hashedPassword: string = await bcrypt.hash(password, 10)
        userList.push({
            username: username, email: email, password: hashedPassword,
        })
        res.send(userList)
    }
}

export default {registerUser}