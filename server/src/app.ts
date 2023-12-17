import express from 'express'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan'

import mongoose from 'mongoose';
import cors from 'cors'

// import { router as indexRouter } from './routes/index'
import { indexRouter } from './routes/index';
import { usersRouter } from './routes/users';
import { experimentOneRouter } from './routes/experiment-one';
import { experimenTwoRouter } from './routes/experiment-two';
import { experimentThreeRouter } from './routes/experiment-three';
import { experimentFourRouter } from './routes/experimnent-four';
import { experimentFiveRouter } from './routes/experiment-five';
import { experimentSixRouter } from './routes/experiment.-six';

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
app.use('/experiment-one', experimentOneRouter)
app.use('/experiment-two', experimenTwoRouter)
app.use('/experiment-three', experimentThreeRouter)
app.use('/experiment-four', experimentFourRouter)
app.use('/experiment-five', experimentFiveRouter)
app.use('/experiment-six', experimentSixRouter)

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then((x: any) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err: any) => {
    console.error("Error connecting to mongo: ", err);
  });


export default app;
