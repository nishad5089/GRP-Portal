import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../../core/auth/auth.service';
import {StorageService} from './storage.service';
import {TOKEN} from '../constant/storage-service-variables';
@Injectable({ providedIn: 'root' })
export class RestClient {
   private token = {};
   constructor(private _http: HttpClient, private authService: AuthService, private storageService: StorageService) {
   }
   private get _headers(): any {
       const currentUser = this.authService.currentUserValue;
       if (currentUser) {
            this.token = this.storageService.read(TOKEN);
       }
       const httpOptions = {
           headers: new HttpHeaders({
               'Content-Type': 'application/json',
               'Accept': 'application/json',
               'Authorization':  'Bearer ' + (this.token || '')
           })
       };
       return httpOptions;
   }
   getFromFile(url: string): any {
       return this._http.get(url, this._headers);
   }
   get(url: string): Observable<any> {
       try {
           return this._http.get<Observable<any>>(url, this._headers);
       } catch (err) {
           return throwError(err.message);
       }
   }
   post(url: string, data: any): Observable<any> {
       try {
           return this._http.post<any>(url, data, this._headers);
       } catch (err) {
           return throwError(err.message);
       }
   }
}
