import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assingment3',
  templateUrl: './assingment3.component.html',
  styleUrls: ['./assingment3.component.css']
})
export class Assingment3Component implements OnInit {

  switchDisplay: boolean = false;
  buttonName: string = 'Display Details';
  secretPassword: string = "Secret Password = tuna";
  logIt: string[] = [''];
  
  constructor() { }

  ngOnInit() {
  }


  onClickHideDisplay() {
  
    if (this.switchDisplay) {
      this.buttonName = 'Display Details'  
      this.logIt.push(this.logIt.length + '. ' + new Date().toLocaleString() );
    }
    else {
      this.buttonName = 'Hide Details'
    }
    this.switchDisplay = !this.switchDisplay 
  }
}
