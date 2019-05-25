import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {IUser} from '../shared/model/user.model';
import {LoginService} from '../shared/services/login.service';
import {takeUntil} from 'rxjs/operators';
import {ReplaySubject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  user: IUser;
  destroySubscriptions$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  public login() {
    this.loginService.login(this.user.name, this.user.password)
      .pipe(takeUntil(this.destroySubscriptions$));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.destroySubscriptions$.next(true);
    this.destroySubscriptions$.complete();
  }

}
