export const MOVIES: any = {
    0: {
        id: 0,
        name: "Titanic",
        iconUrl: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL50_SY1000_CR0,0,671,1000_AL_.jpg',
        directorName: 'James Cameron',
        longDescription: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        genre: 'Romance',
        reviewsCount: 5
    },
    1: {
        id: 1,
        name: "Die Another Day",
        iconUrl: 'https://m.media-amazon.com/images/M/MV5BODNkYmIwYTMtYzdhNy00YWE3LThkYmEtNzA5ZTE5YmVjYzZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL50_SY1000_SX668_AL_.jpg',
        directorName: 'Lee Tamahori',
        longDescription: "James Bond is sent to investigate the connection between a North Korean terrorist and a diamond mogul, who is funding the development of an international space weapon.",
        genre: 'Action',
        reviewsCount: 5
    },
    2: {
        id: 2,
        name: "Jurassic Park",
        iconUrl: 'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_QL50_.jpg',
        directorName: 'Steven Spielberg',
        longDescription: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
        genre: 'Action',
        reviewsCount: 6
    },
    3: {
        id: 3,
        name: "Mission Impossible",
        iconUrl: 'https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg',
        directorName: 'Brian De Palma',
        longDescription: "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.",
        genre: 'Thriller',
        reviewsCount: 7
    },
    4: {
        id: 4,
        name: "Gone in sixty seconds",
        iconUrl: 'https://m.media-amazon.com/images/M/MV5BMTIwMzExNDEwN15BMl5BanBnXkFtZTYwODMxMzg2._V1_QL50_.jpg',
        directorName: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        longDescription: "A retired master car thief must come back to the industry and steal fifty cars with his crew in one night to save his brother's life",
        genre: 'Action',
        reviewsCount: 7
    },
    5: {
        id: 5,
        name: "Top Gun",
        iconUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_QL50_SY1000_CR0,0,646,1000_AL_.jpg',
        directorName: 'Tony Scott',
        longDescription: "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
        genre: 'Thriller',
        reviewsCount: 9
    }
};

export const REVIEWS = {
    1: {
        id: 1,
        "comment": "Awesome",
        "reviewerName": "Tom",
        "seqNo": 1,
        rating: 5,
        movieId: 1
    },
    2: {
        id: 2,
        "comment": "Gr8 Movie",
        "reviewerName": "John",
        "seqNo": 2,
        rating: 4,
        movieId: 1
    },
    3: {
        id: 3,
        "comment": "Classic Movie",
        "reviewerName": "Tim",
        "seqNo": 3,
        rating: 5,
        movieId: 1
    },
    4: {
        id: 4,
        "comment": "OK",
        "reviewerName": "David",
        "seqNo": 4,
        rating: 3,
        movieId: 1
    },
    5: {
        id: 5,
        "comment": "Kickass Movie",
        "reviewerName": "Fowler",
        "seqNo": 5,
        rating: 5,
        movieId: 1
    },

    //2nd Movie
    6: {
        id: 6,
        "comment": "One time Watch",
        "reviewerName": "John",
        "seqNo": 1,
        rating: 3,
        movieId: 2
    },
    7: {
        id: 7,
        "comment": "Helicopter Shot",
        "reviewerName": "Fowler",
        "seqNo": 2,
        rating: 5,
        movieId: 2
    },
    8: {
        id: 8,
        "comment": "Sample Movie",
        "reviewerName": "David",
        "seqNo": 3,
        rating: 2,
        movieId: 2
    },
    9: {
        id: 9,
        "comment": "OK OK",
        "reviewerName": "Tim",
        "seqNo": 4,
        rating: 3,
        movieId: 2
    },
    10: {
        id: 10,
        "comment": "Great to watch",
        "reviewerName": "Tom",
        "seqNo": 5,
        rating: 4,
        movieId: 2
    },
    //3rd Movie
    11: {
        id: 11,
        "comment": "Classic One",
        "reviewerName": "John",
        "seqNo": 1,
        rating: 5,
        movieId: 3
    },
    12: {
        id: 12,
        "comment": "Nice One",
        "reviewerName": "David",
        "seqNo": 2,
        rating: 4,
        movieId: 3
    },
    13: {
        id: 13,
        "comment": "Outstanding movie",
        "reviewerName": "Fowler",
        "seqNo": 3,
        rating: 5,
        movieId: 3
    },
    14: {
        id: 14,
        "comment": "Very Engaging Movie",
        "reviewerName": "Tim",
        "seqNo": 4,
        rating: 4,
        movieId: 3
    },
    15: {
        id: 15,
        "comment": "That's Ok",
        "reviewerName": "Tom",
        "seqNo": 5,
        rating: 3,
        movieId: 3
    },
    //4th Movie
    16: {
        id: 16,
        "comment": "Great Movie",
        "reviewerName": "John",
        "seqNo": 1,
        rating: 5,
        movieId: 4
    },
    17: {
        id: 17,
        "comment": "Kickass show",
        "reviewerName": "Tom",
        "seqNo": 2,
        rating: 5,
        movieId: 4
    },
    18: {
        id: 18,
        "comment": "OK, Nice one",
        "reviewerName": "David",
        "seqNo": 3,
        rating: 3,
        movieId: 4
    },
    19: {
        id: 19,
        "comment": "Nice Try",
        "reviewerName": "Fowler",
        "seqNo": 4,
        rating: 3,
        movieId: 4
    },
    20: {
        id: 20,
        "comment": "Fantabulous Movie",
        "reviewerName": "Tim",
        "seqNo": 5,
        rating: 5,
        movieId: 4
    },
    //5th movie
    21: {
        id: 21,
        "comment": "Didn't Like",
        "reviewerName": "John",
        "seqNo": 1,
        rating: 1,
        movieId: 5
    },
    22: {
        id: 22,
        "comment": "Crap",
        "reviewerName": "Tim",
        "seqNo": 2,
        rating: 2,
        movieId: 5
    },
    23: {
        id: 23,
        "comment": "Learn Movie making first",
        "reviewerName": "David",
        "seqNo": 3,
        rating: 2,
        movieId: 5
    },
    24: {
        id: 24,
        "comment": "Disaster",
        "reviewerName": "Fowler",
        "seqNo": 4,
        rating: 1,
        movieId: 5
    },
    25: {
        id: 25,
        "comment": "Waste of money and waste of time",
        "reviewerName": "Tom",
        "seqNo": 5,
        rating: 1,
        movieId: 5
    },
};

export function findMovieById(movieId: number) {
    return MOVIES[movieId];
}

export function findReviewsForMovie(movieId: number) {
    return Object.values(REVIEWS).filter(review => review.movieId === movieId);
}