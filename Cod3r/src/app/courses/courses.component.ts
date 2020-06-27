import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: any) => {this.courses = data})
  }

}
