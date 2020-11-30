import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Pipe({
  name: 'translatorPipe',
})
export class TranslatorPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(en: string, bn: string): any {
    return this.translate.currentLang === 'bn' ? bn : en;
  }

}
