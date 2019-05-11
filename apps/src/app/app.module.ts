import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { Assingment2Component } from './assingment2/assingment2.component';
import { Assingment3Component } from './assingment3/assingment3.component';

@NgModule({
  declarations: [
    AppComponent,
   ServerComponent,
   ServersComponent,
   WarningAlertComponent,
   SuccessAlertComponent,
   Assingment2Component,
   Assingment3Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
