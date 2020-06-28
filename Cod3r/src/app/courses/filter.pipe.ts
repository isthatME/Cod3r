import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(course: any, term:any): unknown {
    if(term == undefined) return course;
    return course.filter(function (course){
      return course.title.toLowerCase().includes(term.toLowerCase()) || course.stack.toLowerCase().includes(term.toLowerCase()) 
    })

  }

}
