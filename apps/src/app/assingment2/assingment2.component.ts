import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assingment2',
  templateUrl: './assingment2.component.html',
  styleUrls: ['./assingment2.component.css']
})
export class Assingment2Component implements OnInit {

  username = "";
  usernameSaved = "";
  notEmpty = true;

  constructor() { }

  ngOnInit() {
  }

  onReset() {

      this.usernameSaved = "UserName entered is: " + this.username;
      this.username = ""
      this.notEmpty = true;

  }

  onUserNameUpdate(event: Event) {

    if ((<HTMLInputElement>event.target).value.trim()) {
      this.notEmpty = false;

    }
    else
      this.notEmpty = true;
  }
}
