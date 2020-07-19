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

    const sub1 = interval$.subscribe(value => console.log(`1st Stream:- ${value}`));
    const sub2 = interval$.subscribe(value => console.log(`2nd Stream:- ${value}`));
    const sub3 = interval$.subscribe(value => console.log(`3nd Stream:- ${value}`));

    const interval2$ = timer(3000, 1000);
    const sub4 = interval2$.subscribe(value => console.log(`timer Stream:- ${value}`));

    const clickStream$ = fromEvent(document, 'click');
    const sub5 = clickStream$.subscribe(
      value => console.log(`Click stream:-${value}`),
      error => console.log(`Error Occured:${error}`),
      () => console.log(`stream completed`));

    setTimeout(() => {
      sub1.unsubscribe();
      sub2.unsubscribe();
      sub3.unsubscribe();
      sub4.unsubscribe();
      sub5.unsubscribe();
      console.log('unsubscribed')
    }, 5000);
  }
}
