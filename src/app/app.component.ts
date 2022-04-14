import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BroadcastService } from './shared/services/broadcast/broadcast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  showSpinner: boolean;
  showToastMessage: boolean;
  tostmessage: any;
  constructor(
    private broadcastService: BroadcastService
  ) { }

  ngOnInit() {
    console.log('AppComponent ngOnInit()');
    this.subscription = this.broadcastService.subscribeSpinnerState().subscribe((status: boolean) => {
      setTimeout(() => {
        this.showSpinner = status;
      }, 0);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

