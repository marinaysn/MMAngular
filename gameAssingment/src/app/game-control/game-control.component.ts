import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  numNext: number = 0;

  ref;

  @Output() turnOnOff = new EventEmitter<boolean>();

  @Output() intervalSet = new EventEmitter<number>();
  constructor() { }
  ngOnInit() {
  }

  onGameStarted(numNext) {
    console.log('MMM: ' + numNext);
    this.ref = setInterval(() => {
      this.intervalSet.emit(++this.numNext)
    }, 1000);
  }

  onGameEnded(numNext) {
    this.numNext = 0;

    clearInterval(this.ref);
    this.turnOnOff.emit(false);
  }

  onGamePaused(numNext) {
    clearInterval(this.ref);
  }
}
