import { Pipe, PipeTransform } from '@angular/core';
import { Education } from './app.component';

@Pipe({
  name: 'searchEducation'
})
export class SearchEducationPipe implements PipeTransform {

  transform(pipeData: Education[], filterValue: string): any {
    return pipeData.filter(eachitem => {
      return (
        eachitem['schoolName'].toLowerCase().includes(filterValue.toLowerCase())
        || eachitem['fieldOfStudy'].toLowerCase().includes(filterValue.toLowerCase())
      )

    });
  }

}
