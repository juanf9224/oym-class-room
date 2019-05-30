import {Component, Input, OnInit} from '@angular/core';
import {ICourseSchedule} from '../shared/model/course.model';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-course-schedule',
  templateUrl: './course-schedule.component.html',
  styleUrls: ['./course-schedule.component.scss']
})
export class CourseScheduleComponent implements OnInit {
  @Input()
  schedules: ICourseSchedule[];
  dataSource: MatTableDataSource<ICourseSchedule>;
  displayedColumns = ['day', 'from', 'to'];

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ICourseSchedule>(this.schedules);
  }

}
