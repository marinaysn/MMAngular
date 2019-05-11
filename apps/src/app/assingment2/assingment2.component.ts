import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assingment2',
  templateUrl: './assingment2.component.html',
  styleUrls: ['./assingment2.component.css']
})
export class Assingment2Component implements OnInit {

  username = "";
  usernameSaved = "";
  notEmpty = false;

  constructor() { }

  ngOnInit() {
  }

  onReset() {

    if (this.username.trim() === "") {

      this.notEmpty = true;
    }

    else {
      this.notEmpty = false;
      this.usernameSaved = "UserName entered is: " + this.username;
      this.username = ""
    }

  }

  onUserNameUpdate(event: Event) {

    if ((<HTMLInputElement>event.target).value.trim() === "") {
      this.notEmpty = false;

    }
    else
      this.notEmpty = true;
  }
}
