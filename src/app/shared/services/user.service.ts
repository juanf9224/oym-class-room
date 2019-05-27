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
    return this.user;
  }

  public setUser(u: IUser) {
    this.user = u;
  }
}
