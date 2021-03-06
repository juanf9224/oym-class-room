import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authSubscription: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(private http: HttpClient) {}

  public isAuthenticated(): boolean {
    console.log('session data: ', localStorage.getItem('sessionToken'));
    return localStorage.getItem('sessionToken') && localStorage.getItem('sessionToken').length > 0;
    // return localStorage.getItem('isAuthenticated') ? localStorage.getItem('isAuthenticated').includes('true') : false;
  }

  public subscribeToAuth(): ReplaySubject<boolean> {
    return this.authSubscription;
  }
}
