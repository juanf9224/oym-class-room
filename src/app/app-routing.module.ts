import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './shared/services/guard/auth-guard.service';
import {LoginComponent} from './login/login.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {OktaCallbackComponent} from '@okta/okta-angular';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'enrollment',
    component: EnrollmentComponent,
    canActivate: [AuthGuardService]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
