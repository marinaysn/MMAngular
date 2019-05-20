import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameAssingment';

  turnOff: boolean = true;
  numAllNumbers: number[] = [];

  onSetInterval(numNext: number) {
    console.log(numNext);
    this.numAllNumbers.push(numNext);
  };

  onturnOnOff(tOff: boolean){
   if (!tOff) {
     this.turnOff = false
     this.numAllNumbers.length = 0;
    };
  };
}
