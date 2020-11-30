import {throwError} from 'rxjs/internal/observable/throwError';
import {catchError} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {AuthService} from '../../core/auth/auth.service';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ICurrentUser} from '../model/model/current-user';
import {Observable} from 'rxjs/internal/Observable';
import {StorageService} from './storage.service';
import {TOKEN} from '../constant/storage-service-variables';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              private storageService: StorageService) {
  }

  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<ICurrentUser> = new BehaviorSubject<ICurrentUser>(null);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {

    return next.handle(this.addTokenToRequest(request, this.storageService.read(TOKEN)))
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            switch ((<HttpErrorResponse>err).status) {
              case 401:
                // return this.handle401Error(request, next);
                return <any>this.authService.logoutWithoutToken();
              case 400:
                return <any>this.authService.logoutWithoutToken();
            }
          } else {
            return throwError(err);
          }
        }));
  }

  private addTokenToRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
    const headers: any = {Authorization: 'Bearer' + ` ${token}`};
    if (request.url.startsWith('http://localhost') && this.authService.currentUserValue) {
      headers.proxy_id = this.authService.currentUserValue.userOid;
      headers.org_id = this.authService.currentUserValue.officeId;
      headers.user_id = this.authService.currentUserValue.userOid;
      headers.employee_id = this.authService.currentUserValue.employeeId;
      headers.office_unit_post_id = this.authService.currentUserValue.officeUnitPostId;
    }
    return request.clone({setHeaders: headers});
  }

  // private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
  //   if (!this.isRefreshingToken) {
  //     this.isRefreshingToken = true;
  //
  //     // Reset here so that the following requests wait until the token
  //     // comes back from the refreshToken call.
  //     this.tokenSubject.next(null);
  //
  //     return this.authService.refreshToken()
  //       .pipe(
  //         switchMap((user: ICurrentUser) => {
  //           if (user) {
  //             this.tokenSubject.next(user);
  //             localStorage.setItem(CURRENT_USER, JSON.stringify(user));
  //             return next.handle(this.addTokenToRequest(request, user.token_type, user.access_token));
  //           }
  //
  //           return <any>this.authService.logout();
  //         }),
  //         catchError(err => {
  //           return <any>this.authService.logout();
  //         }),
  //         finalize(() => {
  //           this.isRefreshingToken = false;
  //         })
  //       );
  //   } else {
  //     this.isRefreshingToken = false;
  //
  //     return this.tokenSubject
  //       .pipe(filter(user => user != null),
  //         take(1),
  //         switchMap(user => {
  //         return next.handle(this.addTokenToRequest(request, user.token_type, user.access_token));
  //       }));
  //   }
  // }
}
