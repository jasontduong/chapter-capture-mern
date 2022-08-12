import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import request from 'request';
import dotenv from 'dotenv';


const API_URL = 'https://api.myanimelist.net/v2/manga?';
const app = express();
dotenv.config();

const query = 'q=kaiju&limit=1';

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
// const CONNECTION_URL = 'mongodb+srv://jduong6:nzS9OG2P04txkIgb@cluster0.7nns4zg.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5006;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

app.get('/manga', function (req, res) {
    let url = API_URL + query
    req.headers[process.env.HEADER] = process.env.API_KEY
    req.pipe(request(url)).pipe(res)
  })