import { Component, OnInit } from '@angular/core';
import { Movie } from 'app/model/movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    actionMovies: Movie[];
    thrillerMovies: Movie[];
    dramaMovies: Movie[];

    constructor() { }

    ngOnInit() {
        const https$ = this.createObservable('/api/movies');
        const movies$ = https$.pipe(map(res => Object.values(res["data"])));
        https$.subscribe(
            movies => console.log(movies),
        );

        movies$.subscribe(movies => {
            this.actionMovies = movies.filter(movie => movie.genre === 'Action');
            this.thrillerMovies = movies.filter(movie => movie.genre === 'Thriller');
            this.dramaMovies = movies.filter(movie => movie.genre === 'Drama');
        });
    }

    private createObservable(url: string) {
        return Observable.create(obs => {
            fetch(url).then(res => {
                const movies = res.json();
                console.log(`movies:- ${movies}`);
                return movies;
            }).then(data => {
                // emitting movies
                obs.next(data);
                // terminating stream
                obs.complete();
            }).catch(err => {
                // In case of error
                obs.error(err);
            });
        });
    }
}
