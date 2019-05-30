import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ReplaySubject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {
  sidenavOpen: boolean;
  unsubscribeServices$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout()
      .pipe(takeUntil(this.unsubscribeServices$))
      .subscribe(res => {
          this.authService
            .subscribeToAuth().next(true);
          this.router.navigate(['login']);
        },
        error => console.error(error));
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.unsubscribeServices$.next(true);
    this.unsubscribeServices$.complete();
  }

}
