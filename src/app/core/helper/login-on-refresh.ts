import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Injectable({ providedIn: 'root' })
export class LoginOnRefresh {

    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) { }

    // TO GET CURRENT LOG IN USER DETAILS
    getUserInfoDetails() {
        this.authService.getLoginUserDetails().subscribe(
            response => {
                const { data } = response;
                // data.userrole = 1;
                this.authService.setUserInfo(data);
                localStorage.setItem('role', JSON.stringify(response.data));

                // this.router.navigateByUrl('/home');

               
            },
            (err) => {
                console.log(err.message);
            }
        );
    }


}
