import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import {LoginComponent} from './login/login.component';
import {OktaAuthModule} from '@okta/okta-angular';
import { CourseSelectionComponent } from './course/course-selection/course-selection.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseScheduleComponent } from './course/course-schedule/course-schedule.component';

const config = {
  issuer: 'https://dev-248399.okta.com/',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oan3clhxRbcw71xI356'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EnrollmentComponent,
    CourseSelectionComponent,
    CourseListComponent,
    CourseScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OktaAuthModule.initAuth(config),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
