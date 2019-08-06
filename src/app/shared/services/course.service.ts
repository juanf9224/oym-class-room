import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {IUser} from '../model/user.model';
import {environment} from '../../../environments/environment';
import { ICourse } from '../model/course.model';

const coursesMock: HttpResponse<ICourse[]> = new HttpResponse({
  body: [
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
    },
    {
      id: 2,
      name: 'Fisica I',
      credits: 4,
      teacher: 'Fidel Santana',
      preRequisite: 'Programacion de sistemas',
      active: true,
      schedule: [
        {
          day: 'Miercoles',
          from: '6:30 PM',
          to: '10:15 PM'
        }
      ]
    },
    {
      id: 2,
      name: 'Fisica II',
      credits: 4,
      teacher: 'Fidel Santana',
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
  ]
});

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  resourceUrl = `${environment.baseApiUrl}/api/v1/`;

  constructor(
    private http: HttpClient
  ) {}

  fetchAll(): Observable<HttpResponse<ICourse[]>> {
    console.log('Course mock data: ', coursesMock);
    return of(coursesMock);
  }

  // public login(user: IUser): Observable<HttpResponse<IUser>> {
  //   return this.http.post<IUser>(`${this.resourceUrl}/login`, user, {observe: 'response'});
  // }
}
