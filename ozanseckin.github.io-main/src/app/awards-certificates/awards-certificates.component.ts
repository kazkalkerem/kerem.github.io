import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards-certificates',
  templateUrl: './awards-certificates.component.html',
  styleUrls: ['./awards-certificates.component.css']
})
export class AwardsCertificatesComponent implements OnInit {

  @Input() pdfSourcePath: any;

  constructor() { }

  ngOnInit(): void {
  }

}
