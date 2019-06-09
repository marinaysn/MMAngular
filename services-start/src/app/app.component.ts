import { Component, OnInit } from '@angular/core';
import { AccountsService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ ]
})
export class AppComponent implements OnInit{
  

  accounts: {name: string, status: string}[] = [];
 
  constructor(private accountsService: AccountsService ) {}



  ngOnInit(): void {
   // throw new Error("Method not implemented.");
    this.accounts = this.accountsService.account;
  }
}
