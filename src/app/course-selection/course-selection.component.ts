import { Component, OnInit } from '@angular/core';
import { CourseService } from '../shared/services/course.service';
import { ICourse } from '../shared/model/course.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.scss']
})
export class CourseSelectionComponent implements OnInit {

  courses$: Observable<ICourse[]>;

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.loadCourses();
  }

  async loadCourses() {
    this.courses$ = await this.courseService.fetchAll();
    console.log(this.courses$);
  }

}
