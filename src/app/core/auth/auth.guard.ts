import {StorageService} from './../../shared/services/storage.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {AuthService} from './auth.service';
import * as jwt_decode from 'jwt-decode';
import {ICurrentUser} from '../../shared/model/model/current-user';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {RETURN_BASE_URL} from '../../shared/constant/api';
import {EmployeeService} from '../../views/modules/asset/core/services/employee.service';
import {IEmployee} from '../../views/modules/asset/core/models/employee';
import {CURRENT_EMPLOYEE, CURRENT_ROLE_OID, CURRENT_USER, TOKEN} from '../../shared/constant/storage-service-variables';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  public currentUser: Observable<ICurrentUser>;
  private currentUserSubject: BehaviorSubject<ICurrentUser>;

  constructor(private _router: Router, private authService: AuthService, private storageService: StorageService, private employeeService: EmployeeService) {
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

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    // if (route.queryParams[TOKEN]) {
    //   let user: ICurrentUser;
    //   user = this.getDecodedAccessToken(route.queryParams[TOKEN]);
    //   this.storageService.save(TOKEN, route.queryParams[TOKEN]);
    //   this.storageService.save(CURRENT_USER, user);
    //   this.currentUserSubject = new BehaviorSubject<ICurrentUser>(user);
    //   this.currentUser = this.currentUserSubject.asObservable();
    //   this.currentUserSubject.next(user);
    //   if (this.storageService.read(CURRENT_USER)) {
    //     let currentUser: ICurrentUser;
    //     currentUser = this.storageService.read(CURRENT_USER);
    //     this.employeeService.getByOid(currentUser.employeeId).subscribe(result => {
    //       if (result != null) {
    //         let currentEmployee: IEmployee ;
    //         currentEmployee = result.body.data[0];
    //         this.storageService.save(CURRENT_EMPLOYEE, currentEmployee);
    //         console.log(this.storageService.read(CURRENT_EMPLOYEE));
    //       }
    //     });
    //   }
    //   return false;
    // } else if (this.storageService.read(CURRENT_USER) !== null) {
    //   return true;
    // }

      if (route.queryParams[TOKEN]) {
        let user: ICurrentUser;
        user = this.getDecodedAccessToken(route.queryParams[TOKEN]);
        this.storageService.save(TOKEN, route.queryParams[TOKEN]);
        this.storageService.save(CURRENT_USER, user);
        this.storageService.read(CURRENT_USER);
        this.employeeService.getByOid(user.employeeId).subscribe(result => {
          if (result != null) {
            let currentEmployee: IEmployee ;
            currentEmployee = result.body.data[0];
            this.storageService.save(CURRENT_EMPLOYEE, currentEmployee);
            return true;
          }
        });
      } else if (this.storageService.read(CURRENT_USER) === null) {
        return false;
      } else {
        if (!this.authService.isTokenValid(this.storageService.read(CURRENT_USER))) {
          window.location.assign(RETURN_BASE_URL);
        }
      return true;
    }
    const currentRole = this.storageService.read(CURRENT_ROLE_OID);
    if (this.authService) {
      if (this.authService.currentUserValue) {
        if (route.data.roles && route.data.roles.indexOf(currentRole) === -1) {
          // role not authorised so redirect to home page
          this._router.navigate(['/dashboard']);
          return false;
        }
        return true;
      }
    }
    this._router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
