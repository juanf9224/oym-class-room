export interface ICourse {
  id?: number;
  name?: string;
  teacher?: string;
  credits?: number | string;
  preRequisite?: number;
  active?: boolean;
}

export class CourseModel implements ICourse{
  constructor(
    public id?: number,
    public name?: string,
    public teacher?: string,
    public credits?: number | string,
    public preRequisite?: number,
    public active?: boolean
  ) {}
}
