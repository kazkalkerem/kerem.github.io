import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceItemsComponent } from './experience-items/experience-items.component';
import { SearchExperiencePipe } from './search-experience.pipe';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { EducationItemsComponent } from './education-items/education-items.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { SearchEducationPipe } from './search-education.pipe';
import { AwardsCertificatesComponent } from './awards-certificates/awards-certificates.component';
import { CoursesSeminarsComponent } from './courses-seminars/courses-seminars.component';
import { SkillsComponent } from './skills/skills.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ExperienceItemsComponent,
    SearchExperiencePipe,
    ExperienceDetailsComponent,
    EducationItemsComponent,
    EducationDetailsComponent,
    ContactInfoComponent,
    SearchEducationPipe,
    AwardsCertificatesComponent,
    CoursesSeminarsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PdfViewerModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
