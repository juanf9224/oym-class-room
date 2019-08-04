import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {IUser} from '../shared/model/user.model';
import {LoginService} from '../shared/services/login.service';
import {switchMap, takeUntil} from 'rxjs/operators';
import {ReplaySubject} from 'rxjs';
import {Router} from '@angular/router';
import {UserService} from '../shared/services/user.service';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  user: IUser;
  destroySubscriptions$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = {};
  }

  public login() {
    this.loginService.login(this.user.username, this.user.password)
      .pipe(
        takeUntil(this.destroySubscriptions$))
      .subscribe(res => {
        console.log('logged in successfully! - ', res);
        this.getUserDetails(res);
        }, err => {
        console.error('Could not login', err);
        });
  }

  private getUserDetails(res: any): void {
    this.userService.setUser(this.user);
    this.authService.subscribeToAuth().next(true);
    this.router.navigate(['home']);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.destroySubscriptions$.next(true);
    this.destroySubscriptions$.complete();
  }

}
