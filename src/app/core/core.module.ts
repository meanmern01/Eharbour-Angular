import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderInterceptor } from './http-interceptor/http-interceptor';
import { SharedModule } from '../shared/shared.module';
import { LoginOnRefresh } from './helper/login-on-refresh';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClickOutsideModule
  ],
  declarations: [CoreComponent, HeaderComponent, SideMenuComponent, FooterComponent],
  exports: [HeaderComponent, SideMenuComponent, FooterComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (config: LoginOnRefresh) => () =>
        config.getUserInfoDetails(),
      deps: [LoginOnRefresh],
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }
  ]

})
export class CoreModule { }
