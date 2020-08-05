import { Request, Response } from 'express';
import { REVIEWS } from "./db-movie";
import { setTimeout } from "timers";

export function searchReviews(req: Request, res: Response) {

    const queryParams = req.query;

    const movieId = queryParams.movieId,
        filter = queryParams.filter || '',
        sortOrder = queryParams.sortOrder || 'asc',
        pageNumber = parseInt(queryParams.pageNumber) || 0,
        pageSize = parseInt(queryParams.pageSize) || 3;

    let reviews = Object.values(REVIEWS).filter(review => review.movieId == movieId);

    if (filter) {
        reviews = reviews.filter(review => review.comment.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    }

    if (sortOrder === 'desc') {
        reviews = reviews.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const reviewsPage = reviews.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
        res.status(200).json({ payload: reviewsPage });
    }, 1000);
}
