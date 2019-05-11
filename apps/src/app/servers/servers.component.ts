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

  //MY variables
  allowNewServer = false
  weather = "Is it raining now?";
  serverCreationSatus = "No servers were created"
  serverName = 'Marina\'s Server';
  serverCreated = false;

  servers = ['TestServer', 'MarinaServer', 'PaulServer']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      this.weather = "No, it is sunshine!";
    }, 2000);
  }

  ngOnInit() { }


  onCreateServer() {
    this.serverCreationSatus = "Server was created! and Server Name is " + this.serverName
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
