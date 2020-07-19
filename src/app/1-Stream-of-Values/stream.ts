import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })

//Kept as is for reference
export class StreamComponent implements OnInit {

    title = 'rxjs';

    ngOnInit(): void {
        document.addEventListener('click', (evt) => {
            console.log(`Event Occured:- ${evt}`);
        });
    }
}
