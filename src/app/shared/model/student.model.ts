import {ICourse} from './course.model';

export interface IStudent {
  id?: number;
  name?: string;
  lastName?: string;
  studentId?: string | number;
  courses?: ICourse[];
  gradeIndex?: number;
}

export class StudentModel implements IStudent {
  constructor(
    public id?: number,
    public name?: string,
    public lastName?: string,
    public studentId?: string | number,
    public courses?: ICourse[],
    public gradeIndex?: number
  ) {}
}
