import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.scss']
})
export class AlertPopupComponent implements OnInit {
  // @Input() item: any;
  // @Output() childButtonEvent = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<AlertPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }
  ngOnInit(): void {
    // console.log(this.data);
  }

  // clickHandler() {
  //   this.childButtonEvent.emit(true);
  // }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }


}
