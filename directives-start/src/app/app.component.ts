import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1,3,5,7,9,11];
  evenNumbers =[2,4,6,8,10,12];
  onlyOdd = false;
  title: string = "Show ODD numbers";
  title2: string = "EVEN numbers:";

  value: number =5;

  onClick(){
    this.onlyOdd = !this.onlyOdd;

    if (this.onlyOdd) {
    this.title = "Show EVEN numbers";
    this.title2 = "ODD numbers:";
    }

    else {
      this.title = "Show ODD numbers";
      this.title2 = "EVEN numbers:";
    }
  }
}
