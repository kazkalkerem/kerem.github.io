import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../app.component';

@Component({
  selector: 'app-education-items',
  templateUrl: './education-items.component.html'
})
export class EducationItemsComponent implements OnInit {
  @Input() eduItem!: Education;

  constructor() { }

  ngOnInit(): void {
  }

}
