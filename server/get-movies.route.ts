

import { Request, Response } from 'express';
import { MOVIES } from "./db-movie";



export function getAllMovies(req: Request, res: Response) {

    setTimeout(() => {

        res.status(200).json({ payload: Object.values(MOVIES) });

    }, 200);
}


export function getMovieById(req: Request, res: Response) {

    const movieId = req.params["id"];
    const movies: any = Object.values(MOVIES);
    const movie = movies.find(movie => movie.id == movieId);
    res.status(200).json(movie);
}
