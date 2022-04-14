import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(protected datepipe: DatePipe) { }

  dateFormat(newDate = new Date(), skipDate = false) {
    // const curDate = new Date(newDate);
    // const year = curDate.getFullYear();
    // const month = curDate.getMonth() + 1;
    // const date = curDate.getDate();
    // let retStr = `${year}-${month}`;
    // if(!skipDate) {
    //   retStr += `-${date}`;
    // }
    let retStr = this.datepipe.transform(newDate, 'yyyy-MM-dd');
    if (skipDate) {
      retStr = this.datepipe.transform(newDate, 'yyyy-MM');
    }
    return retStr;
  }
  
}
