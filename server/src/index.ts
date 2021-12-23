import * as dotenv from "dotenv";
import express, { urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

// app variables 
if (!process.env.PORT) process.exit(1);
 
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// app middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//start server
app.listen(PORT, ()=> console.log("App is listening on port " + PORT));