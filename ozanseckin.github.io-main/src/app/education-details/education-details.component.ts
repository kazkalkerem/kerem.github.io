import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../app.component';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html'
})
export class EducationDetailsComponent implements OnInit {

  @Input() currentEdu!: Education;
  constructor() { }

  ngOnInit(): void {
  }

}
