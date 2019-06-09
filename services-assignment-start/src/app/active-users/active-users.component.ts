import { Component, OnInit} from '@angular/core';
import { UsersService } from '../UsersService.service';
import { CounterService } from '../CounterService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
 
 users: string[];

  constructor(private userSrv: UsersService, private count: CounterService) { }

  ngOnInit(): void {
    this.users = this.userSrv.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userSrv.onSetToInactive(id);
    this.count.onStatuschange(false);
  }
}
