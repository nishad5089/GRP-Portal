import { Injectable } from '@angular/core';
import {CURRENT_EMPLOYEE, CURRENT_ROLE, CURRENT_ROLE_OID, CURRENT_USER, EMPLOYEE_OFFICE, EMPLOYEE_ON_DISPLAY, TOKEN} from '../constant/storage-service-variables';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private storage: Storage;

    constructor() {
        this.storage = localStorage;
    }

    public save(key: any, value: any) {
        value = JSON.stringify(value);
        this.storage.setItem(key, value);
    }

    public read(key: any): any {
        const value = this.storage.getItem(key);
        return JSON.parse(value);
    }

    public remove(key: any) {
        return this.storage.removeItem(key);
    }
    public clear() {
      this.storage.removeItem(CURRENT_ROLE);
      this.storage.removeItem(CURRENT_ROLE_OID);
      this.storage.removeItem(CURRENT_USER);
      this.storage.removeItem(CURRENT_EMPLOYEE);
      this.storage.removeItem(EMPLOYEE_ON_DISPLAY);
      this.storage.removeItem(EMPLOYEE_OFFICE);
      this.storage.removeItem(TOKEN);
      // return this.storage.clear();
    }
}

export enum StorageKey {
    AUTH_TOKEN = 'AUTH_TOKEN',
    PAGE_NUMBER = 'PAGE_NUMBER'
}
