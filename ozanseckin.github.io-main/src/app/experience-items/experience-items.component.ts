import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../app.component';

@Component({
  selector: 'app-experience-items',
  templateUrl: './experience-items.component.html'
})
export class ExperienceItemsComponent implements OnInit {

  @Input() expitem!: Experience;
  constructor() { }


  ngOnInit(): void {
  }



}
