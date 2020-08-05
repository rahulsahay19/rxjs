import { Component, OnInit, Input } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Movie } from '../model/movie';

@Component({
  selector: 'movies-card-list',
  templateUrl: './movies-card-list.component.html',
  styleUrls: ['./movies-card-list.component.scss']
})
export class MoviesCardListComponent implements OnInit {

  @Input() movies: Movie[];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {

  }

  editMovie(movie: Movie) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = movie;

  }

}
