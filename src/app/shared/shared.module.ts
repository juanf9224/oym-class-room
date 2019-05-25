import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from './material/material.module';
import {MenuComponent} from './layout/menu/menu.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CustomHttpInterceptor} from './interceptor/custom-http-interceptor';
import { SideNavComponent } from './layout/sidenav/sidenav.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule
  ],
  declarations: [
    MenuComponent,
    SideNavComponent,
    LoginComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule,
    MenuComponent,
    SideNavComponent,
    LoginComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
  ]
})
export class SharedModule { }
