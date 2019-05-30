import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser;

  constructor(private http: HttpClient) {}

  public getUser(): IUser {
    return {
      id: 1,
      student: {
        id: 1,
        name: 'Juan',
        lastName: 'Fernandez',
        studentId: '12-MIST-6-006',
        courses: [
          {
            id: 1,
            name: 'Ing. Software',
            credits: 4,
            teacher: 'Luz',
            preRequisite: 'Programacion de sistemas',
            active: true,
            schedule: [
              {
                day: 'Lunes',
                from: '6:30 PM',
                to: '10:15 PM'
              }
            ]
          },
          {
            id: 2,
            name: 'Proyecto Ing. Software',
            credits: 4,
            teacher: 'Carlos Fernandez',
            preRequisite: 'Programacion de sistemas',
            active: true,
            schedule: [
              {
                day: 'Miercoles',
                from: '6:30 PM',
                to: '10:15 PM'
              }
            ]
          }
        ],
        gradeIndex: 4.0
      }
    };
  }

  public setUser(u: IUser) {
    this.user = u;
  }
}
