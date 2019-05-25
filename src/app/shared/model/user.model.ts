import {IStudent} from './student.model';

export interface IUser {
  id?: number;
  username?: string;
  password?: string;
  student?: IStudent;
  active?: boolean;
}

export class UserModel {
  constructor(
    public id?: number,
    public username?: string,
    public password?: string,
    public student?: IStudent,
    public active?: boolean
  ) {}
}

