import { EventEmitter, Injectable } from "@angular/core";
import { CounterService } from "./CounterService.service";

@Injectable()

export class UsersService{

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private count: CounterService) { 
  }

  inactiveCallsUpdated = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.count.onStatuschange(false);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.count.onStatuschange(true);
  }
}