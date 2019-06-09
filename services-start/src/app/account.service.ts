import { LoggingService } from "./logging.service";
import { Injectable } from "@angular/core";

@Injectable()

export class AccountsService {

    account = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Test Account',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      constructor(private loggingServ: LoggingService) {}

      addAcount(name: string, status: string) {
        this.account.push({name: name, status: status});
        this.loggingServ.logStatusChange(status);
      }

      updateStatus(id: number, status: string) {
        this.account[id].status = status;
        this.loggingServ.logStatusChange(status);
      }
}