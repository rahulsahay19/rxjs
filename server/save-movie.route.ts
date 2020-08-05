import { Request, Response } from 'express';
import { MOVIES } from "./db-movie";
import { setTimeout } from 'timers';


export function saveMovie(req: Request, res: Response) {

    const id = req.params["id"],
        changes = req.body;

    console.log("Saving movie", id, JSON.stringify(changes));


    MOVIES[id] = {
        ...MOVIES[id],
        ...changes
    };

    setTimeout(() => {

        res.status(200).json(MOVIES[id]);

    }, 2000);



}
