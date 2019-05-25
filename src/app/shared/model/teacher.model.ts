import {ICourse} from './course.model';

export interface ITeacher {
  id?: number;
  name?: string;
  lastName?: string;
  active?: boolean;
}

export class TeacherModel implements ITeacher {
  constructor(
    public id?: number,
    public name?: string,
    public lastName?: string,
    public active?: boolean
  ) {}
}
