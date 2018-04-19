import { Component, OnInit } from '@angular/core';

import { Vacation } from '../vacation.model';

import { VacationService } from '../vacation.service';

@Component({
  selector: 'app-semaine',
  templateUrl: './semaine.component.html',
  styleUrls: ['./semaine.component.css']
})
export class SemaineComponent implements OnInit {

    selectedVacation: Vacation;

    vacations: Vacation[];


   

  constructor(private vacationService: VacationService) { }

  ngOnInit() {

    this.getVacations();
  }

  onSelect(vacation: Vacation): void {
    this.selectedVacation = vacation;
  }

  getVacations(): void {
      this.vacationService.getVacations()
        .subscribe(vacations => this.vacations = vacations)
    }


}
