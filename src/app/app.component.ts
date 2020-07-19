import { Component, OnInit } from '@angular/core';
import { interval, timer, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'rxjs';

  ngOnInit(): void {
    //Observable of number
    const interval$ = interval(3000);

    interval$.subscribe(value => console.log(`1st Stream:- ${value}`));
    interval$.subscribe(value => console.log(`2nd Stream:- ${value}`));
    interval$.subscribe(value => console.log(`3nd Stream:- ${value}`));

    const interval2$ = timer(3000, 1000);
    interval2$.subscribe(value => console.log(`timer Stream:- ${value}`));

    const clickStream$ = fromEvent(document, 'click');
    clickStream$.subscribe(
      value => console.log(`Click stream:-${value}`),
      error => console.log(`Error Occured:${error}`),
      () => console.log(`stream completed`));
  }
}
