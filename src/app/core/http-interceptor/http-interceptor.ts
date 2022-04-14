import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpInterceptor,
    HttpErrorResponse,
    HttpParams
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';
import { BroadcastService } from '../../../app/shared/services/broadcast/broadcast.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    httpCnt = 0; // TO CHECK ANY HTTP CALL IS PENDING
    constructor(
        private broadcastService: BroadcastService
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        this.broadcastService.publishSpinnerState(true);
        this.httpCnt += 1;
        const jsonURLs = ['/v1/timesheet/save', '/employee/list', '/v1/employee/add', '/v1/employee/update'];
        let httpParams = new HttpParams();
        const { body } = req;

        const { url } = req;
        if (jsonURLs.find(str => url.includes(str))) {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json'
                },
                body
            });
        } else {
            for (const key in body) {
                if (body[key]) {
                    httpParams = httpParams.set(key.toString(), body[key]);
                }
            }

            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                body: httpParams
            });
        }


        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                // TO SKIP THE MESSAGE FOR THIS URL
                if (!error.url.includes('/userinfo')) {
                    this.broadcastService.sendToastMessage({
                        msgTitle: 'Error',
                        msgType: 'error',
                        msgTxt: (error && error.error) ? error.error.message : error.message
                    });
                }
                return throwError(error);
            }),
            finalize(() => {
                this.httpCnt -= 1;
                if (this.httpCnt === 0) {
                    this.broadcastService.publishSpinnerState(false);
                }
            })
        );
    }
}
