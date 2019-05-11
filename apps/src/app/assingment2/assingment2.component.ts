import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assingment2',
  templateUrl: './assingment2.component.html',
  styleUrls: ['./assingment2.component.css']
})
export class Assingment2Component implements OnInit {

  username: String = "";
  usernameSaved: String  = "";
  empty: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onReset() {

      this.usernameSaved = "UserName entered is: " + this.username;
      this.username = ""
      this.empty = true;

  }

  onUserNameUpdate(event: Event) {

    if ((<HTMLInputElement>event.target).value.trim()) {
      this.empty = false;
    }
    else
      this.empty = true;
  }
}
