import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //     <p>Test</p>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false
  weather = "Is it raining now?";
  serverCreationSatus = "No servers were created"

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      this.weather = "No, it is sunshine!";
    }, 2000);
  }

  ngOnInit() { }
  onCreateServer() {
    this.serverCreationSatus = "Server was created!"
  }


}
