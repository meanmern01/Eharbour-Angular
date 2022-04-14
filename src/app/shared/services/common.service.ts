import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  BASE_URL: string;

  constructor(private http: HttpClient) {
    this.BASE_URL = environment.api_url;
  }

  getEmployeeDropdownList(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/dropdown/employee/list`);

  }

  getDepartmentDropdownList(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/dropdown/department/list`);
  }

}
