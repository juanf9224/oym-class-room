import {ICourse} from './course.model';

export interface ICourseHistory {
  id?: number;
  grade?: number;
  course?: ICourse;
}
