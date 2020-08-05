
import * as express from 'express';
import { Application } from "express";
import { getAllMovies, getMovieById } from "./get-movies.route";
import { searchReviews } from "./search-reviews.route";
import { saveMovie } from './save-movie.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/movies').get(getAllMovies);

app.route('/api/movies/:id').get(getMovieById);

app.route('/api/reviews').get(searchReviews);

app.route('/api/movies/:id').put(saveMovie);



const httpServer: any = app.listen(7000, () => {
    console.log(`HTTP REST API Server running at http://localhost:"  ${httpServer.address().port}`);
});



