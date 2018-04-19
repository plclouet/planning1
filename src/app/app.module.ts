import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SemaineComponent } from './semaine/semaine.component';
import { VacationDetailComponent } from './vacation-detail/vacation-detail.component';

import { VacationService } from './vacation.service';


@NgModule({
  declarations: [
    AppComponent,
    SemaineComponent,
    VacationDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    VacationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
