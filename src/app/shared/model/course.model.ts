export interface ICourse {
  id?: number;
  name?: string;
  teacher?: string;
  credits?: number | string;
  preRequisite?: string;
  active?: boolean;
  schedule?: ICourseSchedule[];
}

export interface ICourseSchedule {
  day?: string;
  from?: string;
  to?: string;
}

export class CourseModel implements ICourse {
  constructor(
    public id?: number,
    public name?: string,
    public teacher?: string,
    public credits?: number | string,
    public preRequisite?: string,
    public active?: boolean,
    public shcedule?: ICourseSchedule
  ) {}
}
