import * as dotenv from "dotenv";
import express, { urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import { router } from "./routers/index";
import session from "express-session";
import sqlStore from "express-mysql-session";
const app = express();

dotenv.config();
// app middlewares
app.use(helmet());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

//session store
const SQLStore = new sqlStore(session);

app.use(
  session({
    store: new SQLStore({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "cryptonews",
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1 hour
      sameSite: true,
    },
  })
);

// app variables
if (!process.env.PORT) process.exit(1);

const PORT: number = parseInt(process.env.PORT as string, 10);

//start server
app.listen(PORT, () => console.log("App is listening on port " + PORT));
