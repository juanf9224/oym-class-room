import {Injectable} from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {forkJoin, Observable, of} from 'rxjs';

import {IUser} from '../model/user.model';
import {environment} from '../../../environments/environment';

interface IOktaAuthHateoasBody {
  expiresAt?: string;
  status?: string;
  sessionToken?: string;
  _embedded?: any;
  _links: any;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  resourceUrl = `${environment.baseApiUrl}/api/v1/`;
  oktaAuthUrl = `${environment.oktaApiDomainUrl}/api/v1/`;

  constructor(
    private http: HttpClient
    ) {}

  public login(username: string, password: string): Observable<HttpResponse<IOktaAuthHateoasBody>> {
    const header = new HttpHeaders({
      Authorization: environment.oktaApiAuthBearer,
      'Content-Type': 'application/json'
    });
    return this.http
      .post<IOktaAuthHateoasBody>(
        `${this.oktaAuthUrl}/authn`,
        {username, password},
        { headers: header, observe: 'response' });
    // return of(localStorage.setItem('isAuthenticated', (username === 'student' && password === '1234').toString()));
  }

  public storeSession(data: any): Observable<any> {
    return forkJoin(
      of(localStorage.setItem('userId', data.userId)),
      of(localStorage.setItem('expiresAt', data.expiresAt)),
      of(localStorage.setItem('sessionToken', data.sessionToken))
    );
  }

  public logout(): Observable<any> {
    return of(localStorage.removeItem('sessionToken'));
  }

  // public login(user: IUser): Observable<HttpResponse<IUser>> {
  //   return this.http.post<IUser>(`${this.resourceUrl}/login`, user, {observe: 'response'});
  // }
}
