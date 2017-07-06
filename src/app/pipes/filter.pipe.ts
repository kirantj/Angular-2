import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

transform(details: any, term: any): any {
    if(term === undefined) return details;
      return details.filter(function(names){
           // return names.name.toLowerCase().includes(term.toLowerCase()) || names.designation.toLowerCase().includes(term.toLowerCase());
        return names.name.toLowerCase().includes(term.toLowerCase()) || names.designation.toLowerCase().includes(term.toLowerCase()) || names.place.toLowerCase().includes(term.toLowerCase());
          //return names.designation.toLowerCase().includes(term.toLowerCase());
      })
  }


}
