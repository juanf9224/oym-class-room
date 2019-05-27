import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {IUser} from '../model/user.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  resourceUrl = `${environment.baseApiUrl}/api/v1/`;

  constructor(
    private http: HttpClient
    ) {}

  public login(username: string, password: string): Observable<any> {
    return of(localStorage.setItem('isAuthenticated', (username === 'student' && password === '1234').toString()));
  }

  public logout(): Observable<any> {
    return of(localStorage.setItem('isAuthenticated', 'false'));
  }

  // public login(user: IUser): Observable<HttpResponse<IUser>> {
  //   return this.http.post<IUser>(`${this.resourceUrl}/login`, user, {observe: 'response'});
  // }
}
