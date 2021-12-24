// User is not authenticated
import { Request, Response, NextFunction} from "express"

const isNotAuth =  (req:Request, res:Response, next: NextFunction)=> {

    if (req.session.isAuth) {
      next();
    } else {
      res.json({error: "unauthorized"})
    }
   };
   
   // User is authenticated
 const isAuth = (req:Request, res:Response, next: NextFunction) =>{
    if (req.session.isAuth) {
      res.send("You are welcome")
    } else {
      next();
    }
   };
   
   // Current user
   function currentUser (req:Request, res:Response, next:NextFunction) {
    if (req.session.userEmail) {
      res.locals.userEmail = req.session.userEmail;
      next();
    } else {
      res.locals.userEmail = null;
      next();
    }
   };
   
   export {
    isNotAuth,
    isAuth,
    currentUser
   };