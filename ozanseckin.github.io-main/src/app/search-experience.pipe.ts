import { Pipe, PipeTransform } from '@angular/core';
import { Experience } from './app.component';

@Pipe({
  name: 'searchExperience'
})
export class SearchExperiencePipe implements PipeTransform {

  transform(pipeData: Experience[], filterValue: string): any {
    return pipeData.filter(eachitem => {
      return (
        eachitem['companyName'].toLowerCase().includes(filterValue.toLowerCase())
        || eachitem['jobDescription'].toLowerCase().includes(filterValue.toLowerCase())
      )

    });
  }

}
