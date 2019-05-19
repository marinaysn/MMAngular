import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string, serverContent: string}>();
    // we can ue alias bpCreated. also use in app.html
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string, serverContent: string}>();

    //comment it out as we use local references instead
  //newServerName = '';
  //newServerContent = '';
  
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({ 
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({ 
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value})
  }



}
