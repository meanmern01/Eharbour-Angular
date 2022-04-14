import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserInfo } from '../model/userInfo';
import { MenuListObj } from '../model/interface';
import { UserType, UserTypeNames } from '../model/constants';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    BASE_URL: string;
    private userInfo: UserInfo;
    private menuList: Array<MenuListObj>;

    constructor(private http: HttpClient) {
        this.BASE_URL = environment.api_url;
    }

    setUserInfo(info: any) {
        // if(UserTypeNames.ADMIN) {
        //     info.userrole = UserType.ADMIN;
        // } else {
        //     info.userrole = UserType.EMPLOYEE;
        // }
        this.userInfo = info;
    }

    getUserInfo(): UserInfo {
        return this.userInfo;
    }

    setMenuList(menuArr) {
        this.menuList = menuArr;
    }

    getMenuList(): Array<MenuListObj> {
        return this.menuList;
    }

    getLoginUserDetails(): Observable<any> {
        return this.http.get(`${this.BASE_URL}/userinfo`);
    }

    getCommonSettings(): Observable<any> {
        return this.http.get(`${this.BASE_URL}/getcommonsettings`)
    }

    onLogout(): Observable<any> {
        return this.http.get(`${this.BASE_URL}/logout`);
    }
}
