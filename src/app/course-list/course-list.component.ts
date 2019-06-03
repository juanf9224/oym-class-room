import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../shared/model/course.model';
import {MatTableDataSource} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CourseListComponent implements OnInit {
  @Input() courses: ICourse[];
  @Input() expandable: boolean;
  dataSource: MatTableDataSource<ICourse>;
  columnsToDisplay = [
    {key: 'name', value: 'Materia'},
    {key: 'teacher', value: 'Profesor/a'},
    {key: 'credits', value: 'Creditos'},
    {key: 'preRequisite', value: 'Pre-requisito'}
    ];
  columnsToDisplay2 = [
    'name',
    'teacher',
    'credits',
    'preRequisite'
  ];

  constructor(
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ICourse>(this.courses);
  }

}
