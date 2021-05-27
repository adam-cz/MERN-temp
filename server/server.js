import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

//ROUTES IMPORT
import _itemRoutes from './routes/_items.js';

//INIT
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

//MIDDLEWARE

app.use(cors());

app.use('/_items', _itemRoutes);

//DB AND SERVER

const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGO_URI, mongoConfig)
  .then(() =>
    app.listen(port, () =>
      console.log(`Database connected and server running on port ${port}`)
    )
  )
  .catch((err) => console.log(err.message));
