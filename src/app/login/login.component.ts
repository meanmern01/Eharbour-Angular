import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginOnRefresh } from '../core/helper/login-on-refresh';
import { APP_VERSION } from '../shared/model/constants';
import { BroadcastService } from '../shared/services/broadcast/broadcast.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  appVersion: string;

  constructor(
    private broadcastService: BroadcastService,
    private loginService: LoginService,
    public formbuilder: FormBuilder,
    private loginReferesh: LoginOnRefresh
  ) { 
    this.appVersion = APP_VERSION;
  }

  ngOnInit(): void {
    console.log('LoginComponent ngOnInit()');
    const lsUserName = localStorage.getItem('isq_username') ? localStorage.getItem('isq_username') : '';
    const lsPassword = localStorage.getItem('isq_password') ? localStorage.getItem('isq_password') : '';
    this.loginForm = this.formbuilder.group({
      username: [lsUserName, Validators.required],
      password: [lsPassword, Validators.required],
      rememberMe: [lsUserName ? true : false]
    });
  }

  getControlValidation(key: string): boolean {
    const { invalid, touched, dirty } = this.loginForm.get(key);
    // console.log(key);
    return invalid && (touched || dirty);
  }

  onSubmitLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const { value } = this.loginForm;

    this.loginService.employeeLogin(value).subscribe(
      res => {
        if (res.success) {
          // FOR REMEMBER ME
          // if (value.rememberMe) {
          //   localStorage.setItem('isq_username', res.data.emp_name);
          //   localStorage.setItem('isq_password', value.password);
          // } else {
          //   localStorage.setItem('isq_username', res.data.emp_name);
          //   localStorage.setItem('isq_password', value.password);
          // }

          localStorage.setItem('isq_username', res.data.emp_name);
          localStorage.setItem('isq_password', value.password);

          this.loginReferesh.getUserInfoDetails();
        } else {
          this.broadcastService.sendToastMessage({
            msgTitle: 'Error',
            msgType: 'error',
            msgTxt: res.message
          });
        }
      },
      err => {
        this.broadcastService.handleError(err.error.message);
      }
    );
  }
}
