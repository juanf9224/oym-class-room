import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<any> {
    return of(localStorage.setItem('isAuthenticated', (username === 'student' && password === '1234')));
  }
}
