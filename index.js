import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/Posts.js';

const app = express();

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

const CONNECTION_URL = process.env.MONGO_KEY;

const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server is running on ${PORT}`)))
    .catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false)