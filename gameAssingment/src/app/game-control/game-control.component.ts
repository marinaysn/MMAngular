import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  numNext: number = 0;
  ref;
  //numElement = [ {type: 'even', num: 0, value: true}];

  @Output() intervalFired = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }


onGameStarted(numNext) {
  this.ref = setInterval(() =>{
    this.intervalFired.emit(this.numNext++)
  }, 1000);
}

onGameEnded(numNext) {
  this.numNext = 0;
  clearInterval(this.ref);

}


// onEvenAdded(evenNum: { num: number, value: boolean }) {
//   this.numElement.push({
//     type: 'even',
//     num: evenNum.num,
//     value: evenNum.value
//   });
// }

// onOddAdded(oddNum: {  num: number, value: boolean  }) {
//   this.numElement.push({
//     type: 'even',
//     num: oddNum.num,
//     value: oddNum.value
//   });
// }

 

}
