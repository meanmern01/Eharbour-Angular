import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BroadcastService {
    private toastMessage: Subject<any> = new Subject<any>();
    private spinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() { }

    sendToastMessage(message: { msgTitle: string; msgType: string; msgTxt: string }) {
        this.toastMessage.next(message);
    }

    getToastMessage(): Observable<any> {
        return this.toastMessage.asObservable();
    }

    publishSpinnerState(state: boolean): void {
        this.spinner.next(state);
    }

    subscribeSpinnerState(): Observable<boolean> {
        return this.spinner.asObservable();
    }

    handleError(
        msgTxt: string = `Oops, something's gone wrong! Please try again after sometime`
    ) {
        this.sendToastMessage({
            msgTitle: 'Error',
            msgType: 'error',
            msgTxt
        });
    }

    handleSuccess(msgTxt: string) {
        this.sendToastMessage({
            msgTitle: 'Success',
            msgType: 'success',
            msgTxt
        });
    }

    handleWarning(msgTxt: string) {
        this.sendToastMessage({
            msgTitle: 'Warning',
            msgType: 'warning',
            msgTxt
        });
    }
}
