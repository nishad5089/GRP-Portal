import {AUTH_LOGIN_URL, LOGOUT_URL} from '../../shared/constant/api';
import {StorageService} from '../../shared/services/storage.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SECURITY_URL} from '../../shared/constant/api';
import {ICurrentUser} from '../../shared/model/model/current-user';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Observable} from 'rxjs/internal/Observable';
import {Router} from '@angular/router';
import {CURRENT_AUTHORITY, CURRENT_ROLE, CURRENT_USER} from '../../shared/constant/storage-service-variables';
import {getNavItems, NavData, Role} from '../../_nav';
import {tap} from 'rxjs/operators';
import {SSO_URL} from '../../../root-url';

@Injectable({providedIn: 'root'})
export class AuthService {

  public currentUser: Observable<ICurrentUser>;
  private currentUserSubject: BehaviorSubject<ICurrentUser>;
  private refresh_token: string;

  constructor(private http: HttpClient, private storageService: StorageService, private _router: Router) {
    if (this.storageService.read(CURRENT_USER)) {
      this.currentUserSubject = new BehaviorSubject<ICurrentUser>(this.storageService.read(CURRENT_USER));
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }

  public get currentUserValue(): ICurrentUser {
    if (this.currentUserSubject) {
      return this.currentUserSubject.value;
    }
    return null;
  }

  refreshCurrentUserSubject(): void {
    this.currentUserSubject = new BehaviorSubject<ICurrentUser>(this.storageService.read(CURRENT_USER));
  }

  get currentUserRole(): Role {
    return this.storageService.read(CURRENT_ROLE);
  }

  get authorisedNavItems(): NavData[] {
    return this.filterNavItems(getNavItems(), new Set<string>(this.storageService
      .read(CURRENT_AUTHORITY)
      .map(a => a.name)));
  }

  filterNavItems(items: NavData[], authorities: Set<string>): NavData[] {
    items.forEach(item => {
      if (item.children) {
        item.children = this.filterNavItems(item.children, authorities);
      }
    });
    return items
      .filter(item => item.children ?
        item.children.length :
        !item.authorities ||
        item.authorities.every(auth => authorities.has(auth)));
  }

  login(username: string, password: string) {
    let creds: Record<string, string>;
    creds = {};
    creds['userId'] = username;
    creds['userPassword'] = password;
    creds['clientId'] = 'grp-web-portal';
    creds['clientPassword'] = '123456';
    creds['grantType'] = 'password';
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
    return this.http.post<any>(SECURITY_URL + AUTH_LOGIN_URL, creds, {headers: headers})
      .pipe(
        tap(user => {
          this.storageService.save(CURRENT_USER, user);
          this.currentUserSubject = new BehaviorSubject<ICurrentUser>(this.storageService.read(CURRENT_USER));
          this.currentUser = this.currentUserSubject.asObservable();
          this.currentUserSubject.next(user);
        })
      );
  }

  logout() {
    // const requestParams = new RequestList();
    // requestParams.header.requestType = LOGOUT_URL;
    // requestParams.header.requestSourceService = 'logout';
    // requestParams.body.operation = 'logout';
    // requestParams.t

    // this.currentUserSubject.next(null);

    this.storageService.clear();
    window.location.assign(LOGOUT_URL);

    // ******************** hit logout api directly ******************************

    // let creds:  Record<string, string>;
    // creds = {};
    // this.currentUser.subscribe(pipe(currentUser => {
    //   creds[TOKEN] = currentUser['access_token'];
    //     let headers = new HttpHeaders();
    //   headers = headers.append('Content-Type', 'application/json');
    //   this.http.post(SECURITY_URL + LOGOUT_URL, creds , { headers: headers})
    //     .subscribe(user => {
    //       this.storageService.clear();
    //       this.currentUserSubject.next(null);
    //       window.location.assign('http://45.79.102.237:94/grp-sso/logout');
    //     });
    // }));
  }

  logoutWithoutToken() {
    /*this.storageService.clear();
    this.currentUserSubject.next(null);
    this._router.navigateByUrl('/login');
    return throwError('User not authorized, try again!!');*/
    return;
  }

  // refreshToken(): Observable<ICurrentUser> {
  //     const currentUser = this.currentUserValue;
  //     if (currentUser && currentUser.refresh_token) {
  //         this.refresh_token = currentUser.refresh_token;
  //     }
  //     const creds = 'token=' + this.refresh_token + '&grant_type=refresh_token';
  //     return this.http.post<ICurrentUser>(SECURITY_URL + AUTH_LOGIN_URL, creds)
  //       .pipe(map(user => {
  //           if (user) {
  //             this.storageService.save(CURRENT_USER, JSON.stringify(user));
  //           }
  //           return <ICurrentUser>user;
  //     }));
  // }

  isTokenValid(user: ICurrentUser): boolean {
    if (user) {
      if (new Date(user.exp * 1000) < (new Date)) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
}
