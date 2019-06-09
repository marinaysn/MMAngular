import { Component, OnInit } from '@angular/core';
import { UsersService } from '../UsersService.service';
import { CounterService } from '../CounterService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
 
   users: string[];
 
  constructor(private userSrv: UsersService, private count: CounterService) { 
  
  }

  ngOnInit(): void {
    this.users = this.userSrv.inactiveUsers;
  }

  onSetToActive(id: number) {

    this.userSrv.onSetToActive(id);
    
  }


}
