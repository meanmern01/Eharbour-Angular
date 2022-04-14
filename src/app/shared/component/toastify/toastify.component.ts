import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BroadcastService } from '../../services/broadcast/broadcast.service';

@Component({
  selector: 'app-toastify',
  templateUrl: './toastify.component.html',
  styleUrls: ['./toastify.component.scss']
})
export class ToastifyComponent implements OnInit, OnDestroy {
    toastType: string;
    isVisible: boolean;
    message: { msgTitle: string; msgType: string; msgTxt: string };
    subscription: Subscription;

    constructor(private broadcastService: BroadcastService) {
        this.isVisible = false;
        this.toastType = '';
    }

    ngOnInit() {
        console.log('ToastifyComponent ngOnInit()');
        this.subscription = this.broadcastService
            .getToastMessage()
            .subscribe(message => {
                this.show(message);
            });
    }

    show(message: { msgTitle: string; msgType: string; msgTxt: string }) {
        this.message = message;
        const { msgType } = message;
        switch (msgType) {
            case 'success':
                this.toastType = 'toast-success';
                break;
            case 'error':
                this.toastType = 'toast-error';
                break;
            case 'info':
                this.toastType = 'toast-info';
                break;
            case 'warning':
                this.toastType = 'toast-warning';
                break;
            default:
                break;
        }
        this.isVisible = true;
        setTimeout(() => {
            this.isVisible = false;
        }, 3000);
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
