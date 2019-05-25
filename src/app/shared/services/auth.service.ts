import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public isAuthenticated(): Observable<any> {
    return of(localStorage.getItem('isAuthenticated'));
  }
}
