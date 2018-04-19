import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Vacation } from './vacation.model';
import {VACATIONS } from './mock-vacation';



@Injectable()
export class VacationService {


   constructor() { }

    getVacations(): Observable<Vacation[]>{
  
    return of(VACATIONS);

  
  }

 

}
