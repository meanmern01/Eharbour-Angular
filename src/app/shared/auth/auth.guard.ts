import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private router: Router,
        private authService: AuthenticationService,
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const userInfo = this.authService.getUserInfo();
        if (userInfo && userInfo.userrole) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }

    canLoad(route: Router): Promise<boolean> | boolean {
        // const menuList = this.authService.getMenuList();
        // const menuObj = menuList.find(obj => obj.url === route.path);

        // if (menuObj) {
        //     return true;
        // }
        // this.router.navigate(['/']);
        // return false;
        const userInfo = this.authService.getUserInfo();
        if (userInfo && userInfo.userrole) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const menuList = this.authService.getMenuList();
        // console.log("menuList", menuList, state)
        if (menuList !== undefined) {
            const menuObj = menuList.find(obj => ('/' + obj.url) === state.url);
    
            if (menuObj) {
                return true;
            }
        }
        this.router.navigate(['/']);
        return false;
    }
}
