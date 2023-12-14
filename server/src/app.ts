import express from 'express'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan'

import mongoose from 'mongoose';
import cors from 'cors'

// import { router as indexRouter } from './routes/index'
import { indexRouter } from './routes';
import { usersRouter } from './routes/users';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('trust proxy', 1);
app.enable('trust proxy');

app.use(
    cors({
      origin: [process.env.REACT_APP_URI as string]  // <== URL of our future React app
    })
  );

// app.use(
//     cors()
//   );

app.use('/', indexRouter);
app.use('/users', usersRouter);

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then((x: any) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err: any) => {
    console.error("Error connecting to mongo: ", err);
  });


export default app;
