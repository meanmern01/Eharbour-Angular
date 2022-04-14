import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  private BASE_URI: string;

  constructor(private http: HttpClient) {
    this.BASE_URI = environment.api_url;
   }


  
   getMenuListApi(): Observable<any> {
      return this.http.get(`${this.BASE_URI}/menu/list `);
    // return this.http.get(`assets/mockData/admin-menu.json `);
  }

}
