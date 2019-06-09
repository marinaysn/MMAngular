import { Component, OnInit } from '@angular/core';
import { UsersService } from './UsersService.service';
import { CounterService } from './CounterService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }

  activeUsers: string [] = [];
  inactiveUsers: string [] = [];
  inactiveCalls: number;
  activeCalls: number;

  constructor(private userService: UsersService, private counter: CounterService) {
    this.counter.inactiveCallsUpdated.subscribe(
      (inactiveCalls:number) => this.inactiveCalls = inactiveCalls
    );
  }

  ngOnInit(): void {
     this.activeUsers = this.userService.activeUsers;
     this.inactiveUsers = this.userService.inactiveUsers;
     this.activeCalls = this.counter.activeCalls;
     this.inactiveCalls = this.counter.inactiveCalls;
  }

  getInactiveUsersCount() {
    console.log("AAAA inactiveCalls: "+ this.inactiveCalls)
    return this.inactiveCalls;
  }
}
