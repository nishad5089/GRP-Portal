import { DOCUMENT } from '@angular/common';
import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getNavItems, NavData } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
// public navItems = navItems;
// @Output() languageChangeEventEmitter = new EventEmitter<{}>();
public navItems: NavData[];
public menuJson: string;
public roleOid: string;
// employeeInfo: IEmployee;
locale: string;
public sidebarMinimized = false;
private changes: MutationObserver;
public element: HTMLElement;
public showLanguage: string;
public LANGUAGE_BANGLA = 'বাংলা';
public LANGUAGE_ENGLISH = 'English';
public showLoader: boolean;
currentRole: string;
public roleList: Array<any>;
//public currentEmployee: Observable<IEmployee>;
// private currentEmployeeSubject: BehaviorSubject<IEmployee>;

constructor(private translate: TranslateService, private cdr: ChangeDetectorRef,@Inject(DOCUMENT) _document?: any) {

  this.changes = new MutationObserver((mutations) => {
    this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
  });
  this.element = _document.body;
  this.changes.observe(<Element>this.element, {
    attributes: true,
    attributeFilter: ['class']
  });
  this.translate.addLangs(['bn', 'en']);
  this.translate.setDefaultLang('bn');
  this.showLanguage = this.LANGUAGE_ENGLISH;
  // const browserLang = this.translate.getBrowserLang();
  this.translate.use('bn');
  // this.translate.use(browserLang.match(/bn|en/) ? browserLang : 'bn');
}

ngOnInit(): void {

  let diceEntries = new Set<string>();

  //Add Values
  diceEntries.add('USER_LIST');
this.navItems = this.filterNavItems(getNavItems(),diceEntries);

}

filterNavItems(items: NavData[], authorities: Set<string>): NavData[] {
  items.forEach(item => {
    if (item.authorities) {
      item.children = null;
    }
    if (item.children) {
      item.children = this.filterNavItems(item.children, authorities);
    }
  });
  return items.filter(item => {
    if (!(item.isMenuLink === undefined || item.isMenuLink === null)) {
      return item.isMenuLink;
    }
    if (item.children) {
      return item.children.length;
    } else {
      return !item.authorities ||
        item.authorities.every(auth => authorities.has(auth));
    }
  });
}

/*getRoleList() {
  this.loaderService.display(true);
  this.commonService.getRoleList().subscribe(result => {
    this.loaderService.display(false);
      if (result != null) {
          this.roleList = result['body']['data'];
          this.roleOid = this.storageService.read(CURRENT_ROLE_OID);
          this.currentRole = this.storageService.read(CURRENT_ROLE);
          if (!this.roleOid && this.roleList) {
            this.roleList.forEach(element => {
                if (element.defaultStatus === 'Yes') {
                  this.roleOid = element.oid;
                  this.currentRole = element.nameBn;
                  this.storageService.save(CURRENT_ROLE, element.nameBn);
                  this.storageService.save(CURRENT_ROLE_OID, element.oid);
                }
            });
          }
          this.getMenuJsonData();
      }
  });
}*/

goToProfile() {

}

changeRole(role: any) {

  // ******************** uncomment this ********************************

  // if (role.nameBn === this.currentRole) {
  //   return;
  // }
  // this.roleOid = role.oid;
  // this.getMenuJsonData();
  // this.storageService.save(CURRENT_ROLE, role.nameBn);
  // this.storageService.save(CURRENT_ROLE_OID, role.oid);
  // this.currentRole = this.storageService.read(CURRENT_ROLE);
  // this._router.navigateByUrl('/dashboard');
}


getEmployeeInfo() {
  // this.commonService.getEmployeeBasicInfo().subscribe(result => {
  //     if (result != null) {
  //         this.employeeInfo = result['body']['data'];
  //     }
  // });

  // let currentUser: ICurrentUser ;
  // currentUser = JSON.parse(this.storageService.read(CURRENT_EMPLOYEE));
  // this.storageService.read(currentUser.employeeId).subscribe(result => {
  //   if (result != null) {
  //     this.employeeInfo = result['body']['data'];
  //   }
  // });


}

/*getMenuJsonData() {
  this.loaderService.display(true);
  this.commonService.getMenuJsonList(this.roleOid).subscribe(result => {
    this.getEmployeeInfo();
    this.loaderService.display(false);
      if (result != null) {
          this.menuJson = result['body']['data']['menuJson'];
          this.navItems = navItems;
      }
  });
}*/

// logout() {
//   this.authService.logout();
// }

changeLang() {
  if (this.translate.currentLang === 'bn') {
    this.translate.use('en');

    this.locale = 'en';
    this.showLanguage = this.LANGUAGE_BANGLA;
  } else {
    this.translate.use('bn');
    this.locale = 'bn';
    this.showLanguage = this.LANGUAGE_ENGLISH;
  }
}

ngOnDestroy(): void {
  this.changes.disconnect();
}

public ngDoCheck(): void {
  this.cdr.detectChanges();
}

// backToDashboard() {
//   window.location.replace(DASHBOARD_URL);
// }

// goToAppDashboard() {
//   window.location.replace(SSO_URL);
// }

}
