import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../UsersService.service';
import { CounterService } from '../CounterService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

 // @Output() userSetToInactive = new EventEmitter<number>();

  // onSetToInactive(id: number) {
  //   this.userSetToInactive.emit(id);
  // }
  constructor(private userSrv: UsersService, private count: CounterService) { }

  onSetToInactive(id: number) {
    this.userSrv.onSetToInactive(id);
    this.count.onStatuschange(false);
  }
}
