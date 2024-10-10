  import express from "express"
  import mongoose from "mongoose";
  // import config from "./configs.js"
  import dotenv from "dotenv"
  import { Book } from './models/bookmodels.js'
  import { request } from "http";
  // import { SourceTextModule } from "vm";
  import bookRouter from './routes/BookRuotes.js'
  import cors from 'cors';

  dotenv.config();
  const app = express();

  const mongoDBURL = process.env.connStr;
  app.use(express.json());

  app.use(cors());
  // app.use(cors({
  //   origin : 'http://localhost:3003',
  //   methods : ['Get','Post','Delete','put'],
  //   allowedHeaders : ['Content-Type']
  // }))
  app.get('/', (req, res) => {
    res.send('hii.. World!')
  })

  app.use('/books',bookRouter);


  mongoose
    .connect(mongoDBURL)

    .then(() => {
      console.log("Mongoose is running...")

      app.listen(process.env.PORT, () => {
        console.log(`helllo... app listening`)
        console.log(`mongodb url is : ${mongoDBURL}`);
      })

    })
    .catch((error) => {
      console.log(error);
    })