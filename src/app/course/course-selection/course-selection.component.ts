import { Component, OnInit } from '@angular/core';

import {ICourse} from '../../shared/model/course.model';
import {CourseService} from '../../shared/services/course.service';

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.scss']
})
export class CourseSelectionComponent implements OnInit {

  courses: ICourse[];

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.fetchAll().subscribe( res => this.courses = res.body);
    console.log(this.courses);
  }

}
