import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse, HttpEvent
} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {LoaderService} from './loader.service';
import {NotificationService} from './notification.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  // FIXME: Keeping track of total request is error prone in multi-threading context.
  //  Use Mutex or hypothetically a stack. Watch: https://www.youtube.com/watch?v=7ENFeb-J75k
  private totalRequests = 0;

  constructor(private loaderService: LoaderService,
              private notificationService: NotificationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.loaderService.display(true);
    return next.handle(request).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          this.decreaseRequests();
        }
      }),
      catchError(err => {
        this.decreaseRequests();
        throw err;
      })
    );
  }

  private decreaseRequests() {
    this.totalRequests--;
    if (this.totalRequests === 0) {
      this.loaderService.display(false);
    }
  }
}
