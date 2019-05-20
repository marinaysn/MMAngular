import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameAssingment';

  numAllNumbers: number[] = [];

  onSetInterval(numNext: number){
    console.log(numNext);
    this.numAllNumbers.push(numNext);

    if (numNext < 0) {
      this.numAllNumbers.length = 0;
    }
  };
}
