import { Component } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';
import { stringify } from '@angular/core/src/util';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [
    `.online {
        color: white;
    }`
]
})

export class ServerComponent {
    serverId = 10;
    serverStatus: string = 'offline'

    constructor () {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}