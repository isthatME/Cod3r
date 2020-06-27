import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course> {
    return this.http.get<Course>('http://localhost:3000/cards')
  }
}
