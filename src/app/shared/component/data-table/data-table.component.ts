import { Component, Input, OnInit, ViewChild, Output, EventEmitter, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
// import { debounceTime } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatPaginatorIntl } from '@angular/material/paginator';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { fromEvent, Subscription } from 'rxjs';
import { TableAdditionalOptions } from '../../interface/interface';
import { CustomPaginator } from "./custom-pagination";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ]
})
export class DataTableComponent implements AfterViewInit, OnDestroy {  
  @Input() columnHeader: any;
  @Input() set rows(val) {
    if (val) {
      this.setListData(val);
    }
  }
  objectKeys = Object.keys;
  @ViewChild('searchBox') searchBox: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Output() actionEvents = new EventEmitter<{ data: any, action: string, clickAcion: boolean }>();
  @Output() selectEvents = new EventEmitter<{ data: any, action: string, clickAcion: boolean }>();
  @Output() newActionEvents = new EventEmitter<{ data: any, action: string, clickAcion: boolean }>();

  @Output() searchEvents = new EventEmitter<any>();
  @Output() tableOptionEvents = new EventEmitter<any>();
  @Input() showLeaveSelect: any;
  @Input() totalCount: any;
  leaveType: Array<string>;
  listData: any;
  searchParam: TableAdditionalOptions;
  subscription: Subscription;

  constructor() {
    this.leaveType = ['', 'Leave', 'Half Day', 'Optional Holiday', 'On Duty'];
    this.searchParam = {
      leaveType: '',
      search_string: '',
      start: 1,
      limit: this.totalCount || 10
    };
  }
  
  ngAfterViewInit() {
    this.subscription =  fromEvent(this.searchBox.nativeElement, 'input')
      .pipe(
        map(
          (event: { target: HTMLInputElement }) => event.target.value
        ),
        // filter(value => value.length >= 3),
        debounceTime(2000),
        distinctUntilChanged(),
        switchMap(searchStr => {
          this.searchParam.search_string = searchStr;
          this.tableOptionEvents.emit(this.searchParam);

          return searchStr;
        })
      )
      .subscribe(
        result => {
        },
        err => {
          console.log(err);
        }
      );
  }

  setListData(data) {
    this.listData = data;
    // console.log(this.listData);
    this.listData.paginator = this.paginator;
    this.listData.sort = this.sort;
    // this.listData.forEach((res, index) => res['sNumber'] = index + 1);
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.listData.filter = filterValue.trim().toLowerCase();
  //   this.searchParam.searchString = filterValue.trim().toLowerCase();
  //   // this.searchData();
  //   if (this.listData.paginator) {
  //     this.listData.paginator.firstPage();
  //   }
  // }

  approvelFilter(status) {
    return status;
  }

  statusColor(status) {
    if (status === 'Partially Verified') {
      return 'partially_verified';
    } else if (status === 'Verified') {
      return 'verified';
    } else if (status === 'Applied') {
      return 'Applied';
    }
  }

  approveStatusColor(status) {
    if (status === 'approved') {
      return 'approved';
    } else if (status === 'rejected') {
      return 'rejected';
    } else if (status === 'denied') {
      return 'denied';
    }else{
      return 'waiting'
    }
  }

  pageEvent(data) {
    this.searchParam.start = 1 + (data.pageIndex * data.pageSize);
    this.searchParam.limit = data.pageSize; //(data.pageSize * (data.pageIndex + 1)) || 10;
    // this.searchData();
    this.tableOptionEvents.emit(this.searchParam);
  }

  onClickAction(data, action, clickAcion = null) {
    this.actionEvents.emit({ data, action, clickAcion });
  }

  onSelect(data, action, clickAcion = null){
    this.selectEvents.emit({ data, action, clickAcion });
  }

  onClickApprove(data, action, clickAcion = null) {
    this.newActionEvents.emit({ data, action, clickAcion });
  }

  onClickLeaveType(leaveData) {
    this.searchParam.leaveType = leaveData;
    // this.searchData();
  }  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
