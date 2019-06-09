import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../UsersService.service';
import { CounterService } from '../CounterService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
 
  // @Output() userSetToActive = new EventEmitter<number>();

  // onSetToActive(id: number) {
  //   this.userSetToActive.emit(id);
  // }


  constructor(private userSrv: UsersService, private count: CounterService) { 
  
  }

  onSetToActive(id: number) {

    this.userSrv.onSetToActive(id);
    this.count.onStatuschange(true);
  }


}
