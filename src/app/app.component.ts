import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
    const https$ = this.createObservable('/api/movies');
    const movies$ = https$.pipe(map(res => Object.values(res["data"])));
    https$.subscribe(
      movies => console.log(movies),
    );

    movies$.subscribe(movies => console.log(movies));
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
