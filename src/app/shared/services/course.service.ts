import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {IUser} from '../model/user.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  resourceUrl = `${environment.baseApiUrl}/api/v1/`;

  constructor(
    private http: HttpClient
  ) {}

  public fetchAll(): Observable<any> {
    return of([]);
  }

  // public login(user: IUser): Observable<HttpResponse<IUser>> {
  //   return this.http.post<IUser>(`${this.resourceUrl}/login`, user, {observe: 'response'});
  // }
}
