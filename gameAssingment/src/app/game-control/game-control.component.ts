import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  numNext: number = 0;
  ref;

  @Output() intervalFired = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }


  onGameStarted(numNext) {
    this.ref = setInterval(() => {
      this.intervalFired.emit(++this.numNext)
    }, 1000);
  }

  onGameEnded(numNext) {
    this.numNext = 0;
    clearInterval(this.ref);

  }


}
