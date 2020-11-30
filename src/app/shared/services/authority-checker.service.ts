import { Injectable } from '@angular/core';
import {StorageService} from './storage.service';
import {ICurrentUser} from '../model/model/current-user';
import {IEmployee} from '../../views/modules/asset/core/models/employee';
import {CURRENT_EMPLOYEE, CURRENT_USER, EMPLOYEE_OFFICE} from '../constant/storage-service-variables';

@Injectable({
  providedIn: 'root'
})
export class AuthorityCheckerService {
  constructor(private _storageService: StorageService) {}
  isAuthorized(): boolean {
    let currentEmployee: IEmployee ;
    currentEmployee = this._storageService.read(CURRENT_EMPLOYEE);
    if (currentEmployee.officeOid === '0') {
      return true;
    }
    // let currentLocation: string;
    // currentLocation = window.location.pathname;
    // if (!currentLocation.endsWith('/employee')) {
    //   if (currentLocation.search('/employee/') === -1) {
    //     return currentEmployee.isOfficeAdmin === 'Yes';
    //   }
    // }
    let currentOffice: any;
    currentOffice = this._storageService.read(EMPLOYEE_OFFICE);
    if (currentOffice === null) {
      return currentEmployee.isOfficeAdmin === 'Yes';
    }
    let user: ICurrentUser;
    user = this._storageService.read(CURRENT_USER);
    if (user.officeId === null) {
      return false;
    }
    if (user.officeId === '0') {
      return true;
    }
    return (currentOffice.officeOid === user.officeId) && (currentEmployee.isOfficeAdmin === 'Yes');
  }
}
