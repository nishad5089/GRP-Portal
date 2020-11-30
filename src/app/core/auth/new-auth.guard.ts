import {StorageService} from '../../shared/services/storage.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {AuthService} from './auth.service';
import {ICurrentUser} from '../../shared/model/model/current-user';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {EmployeeService} from '../../views/modules/asset/core/services/employee.service';
import {CURRENT_USER} from '../../shared/constant/storage-service-variables';
import {NavData} from '../../_nav';

@Injectable({providedIn: 'root'})
export class NewAuthGuard implements CanActivate {

  public currentUser: Observable<ICurrentUser>;
  private currentUserSubject: BehaviorSubject<ICurrentUser>;

  constructor(private _router: Router, private authService: AuthService, private storageService: StorageService, private employeeService: EmployeeService) {
    if (this.storageService.read(CURRENT_USER)) {
      this.currentUserSubject = new BehaviorSubject<ICurrentUser>(this.storageService.read(CURRENT_USER));
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    /*const isAuthorised = this.getAuthorisedUrls(this.authService.authorisedNavItems).includes(state.url);
    if (!isAuthorised) {
      this._router.navigate(['dashboard']);
    }
    return isAuthorised;*/
    return true;
  }

  getAuthorisedUrls(navItems: NavData[], urls: string[] = []): string[] {
    navItems.forEach(item => {
      if (item.children) {
        this.getAuthorisedUrls(item.children, urls);
      }
      urls.push(item.url);
    });
    return urls;
  }
}
