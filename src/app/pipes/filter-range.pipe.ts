import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRange'
})
export class FilterRangePipe implements PipeTransform {

// custom filter for pipe
    transform(people, sliderValue) {
      let minAge = sliderValue;
        return people.filter(ppp => {
           return ppp.age >= +minAge;
        });
   }

}
