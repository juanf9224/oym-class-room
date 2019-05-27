import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from './material/material.module';
import {MenuComponent} from './layout/menu/menu.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CustomHttpInterceptor} from './interceptor/custom-http-interceptor';
import {SideNavComponent} from './layout/sidenav/sidenav.component';
import { IsAuthenticatedDirective } from './directives/auth/is-authenticated.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  declarations: [
    MenuComponent,
    SideNavComponent,
    IsAuthenticatedDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule,
    MenuComponent,
    SideNavComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
