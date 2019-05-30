import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './shared/services/guard/auth-guard.service';
import {LoginComponent} from './login/login.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {OktaCallbackComponent} from '@okta/okta-angular';
import {CourseSelectionComponent} from './course-selection/course-selection.component';

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
  {
    path: 'course-selection',
    component: CourseSelectionComponent,
    canActivate: [AuthGuardService]
  },
  { path: '**',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
