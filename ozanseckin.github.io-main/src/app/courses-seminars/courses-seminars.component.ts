import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-seminars',
  templateUrl: './courses-seminars.component.html',
  styleUrls: ['./courses-seminars.component.css']
})
export class CoursesSeminarsComponent implements OnInit {

  @Input() courseSeminarItem: any; 
  constructor() { }

  ngOnInit(): void {
  }

}
