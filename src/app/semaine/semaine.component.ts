import { Component, OnInit } from '@angular/core';
import { Vacation } from '../vacation.model'

@Component({
  selector: 'app-semaine',
  templateUrl: './semaine.component.html',
  styleUrls: ['./semaine.component.css']
})
export class SemaineComponent implements OnInit {
  vacation: Vacation = {

    id: 1,
    date: '15/04',
    plage: 'matin',
    modalite: 'scanner',
    lieu: 'cmc'
  };

  constructor() { }

  ngOnInit() {
  }

}
