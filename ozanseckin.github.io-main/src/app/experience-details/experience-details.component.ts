import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../app.component';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html'
})
export class ExperienceDetailsComponent implements OnInit {

  @Input() currentExp!: Experience;
  constructor() { }

  ngOnInit(): void {
  }

}
