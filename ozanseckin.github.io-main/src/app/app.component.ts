import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.ozan.css'],
  encapsulation: ViewEncapsulation.None
}
)



export class AppComponent implements OnInit {
  ownerVar: string;
  listExperiences: Experience[] = [];
  selectedExp: string;
  currentExperience: Experience | undefined;

  listEducations: Education[] = [];
  selectedEducation: string;
  currentEducation: Education | undefined;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  pdfSourceList = [
    { label: "cfot", path: "/assets/certificates/eCertificate.pdf" },
    { label: "ıso 9001", path: "/assets/certificates/ıso 9001.pdf" },
    
    { label: "YTÜ Diploma", path: "/assets/certificates/YTÜ Diploma.pdf" },
    { label: "web-grafik tasarım", path: "/assets/certificates/web-grafik tasarım.pdf" },
    
    ];

  courseEventList = [
   
    { eventName: "CCNA R&S ", location: "Istanbul", year: "2016", type: "Course", tooltip: "" },
   
    { eventName: "TÜV Rheinland Group", location: "Kocaeli", year: "2015", type: "Event", tooltip: "İSO 9001:2008.ISO 14001,OHSAS 18001 ENTEGRE YÖNETİM SİSTEMLERİ TEMEL VE İÇ DENETÇİ SERTİFİKASI" },
    { eventName: "Certified Fiber Optic Technician", location: "Istanbul", year: "2010", type: "FOA", tooltip: "Course for Certified Fiber Optic Technician" },
    { eventName: "Web Grafik Tasarım ", location: "Istanbul", year: "2017", type: "Bilgeadam", tooltip: "Web Grafik Tasarım" },
    ];

   skillList =["PL/SQL", "Exadata", "SQL-Loader", "MsSQL", "Data Structures","OOAD (Object Oriented Analysis Design)", "XML", "TOAD", "ADF", "C#", "Asp.Net", "Biztalk", "Agile", "Scrum", "Kanban", "Visual Studio", "SQL_Server", "Java", "Javascript"]; 


  selectExperience(item: Experience) {
    this.currentExperience = item;

    for (let expItem of this.listExperiences) {
      if (expItem.companyName != item.companyName) {
        expItem.highlight = false;
      }
      else { expItem.highlight = true; }
    }
  }

  selectEducation(item: Education) {
    this.currentEducation = item;

    for (let eduItem of this.listEducations) {
      if (eduItem.schoolName != item.schoolName) {
        eduItem.highlight = false;
      }
      else { eduItem.highlight = true; }
    }
  }


  constructor(private http: HttpClient) {
    this.ownerVar = "Ozan Seçkin";
    this.selectedExp = '';
    this.selectedEducation = '';
  }

  ngOnInit(): void {
    this.http.get<Experience[]>('../assets/experience-data.json').subscribe(data => this.listExperiences = data)
    this.http.get<Education[]>('../assets/education-data.json').subscribe(data => this.listEducations = data)
  }

}

export interface Experience {
  companyName: string;
  companyShortName: string;
  jobTitle: string;
  jobDate: string;
  jobDescription: string;
  highlight: boolean;
};

export interface Education {
  schoolName: string;
  schoolShortName: string;
  fieldOfStudy: string;
  educationDate: string;
  cgpa: string;
  location: string;
  highlight: boolean;
  degreePath: string;
};