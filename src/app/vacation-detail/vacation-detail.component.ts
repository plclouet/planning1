import { Component, OnInit, Input } from '@angular/core';
import { Vacation } from '../vacation.model'

@Component({
  selector: 'app-vacation-detail',
  templateUrl: './vacation-detail.component.html',
  styleUrls: ['./vacation-detail.component.css']
})
export class VacationDetailComponent implements OnInit {
  @Input() vacation: Vacation;

  constructor() { }

  ngOnInit() {
  }

}
