import { DOCUMENT } from '@angular/common';
import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getNavItems, NavData } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  locale: string;
  public sidebarMinimized = true;
  public hover = false;
  private changes: MutationObserver;
  public element: HTMLElement;
  public showLanguage: string;
  public LANGUAGE_BANGLA = 'বাংলা';
  public LANGUAGE_ENGLISH = 'English';
  public navItems: NavData[];
  constructor(private translate: TranslateService, private cdr: ChangeDetectorRef, @Inject(DOCUMENT) _document?: any) {

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
    this.navItems = getNavItems();
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
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

}
