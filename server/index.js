import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import request from 'request';


const API_URL = 'https://api.myanimelist.net/v2/manga/ranking?ranking_type=bypopularity&limit=10';
const API_KEY = '6774860f578defdb5ef5899f865a0138';
const HEADER = 'X-MAL-CLIENT-ID';
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
const CONNECTION_URL = 'mongodb+srv://jduong6:nzS9OG2P04txkIgb@cluster0.7nns4zg.mongodb.net/?retryWrites=true&w=majority';
const PORT = 5006;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

app.use('/manga', function (req, res) {
    let url = API_URL
    req.headers[HEADER] = API_KEY
    req.pipe(request(url)).pipe(res)
  })