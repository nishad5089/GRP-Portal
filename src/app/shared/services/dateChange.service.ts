import {Injectable} from '@angular/core';

@Injectable()
export class DateChangeService {

  constructor() {
  }
  changeHour(date: Date, increaseAmount: number ): string {
    date.setHours(date.getHours() + increaseAmount);
    let day: string;
    let month: string;
    let year: string;
    if (date.getDate() < 10) {
      day = '0' + date.getDate().toString();
    } else {
      day = date.getDate().toString();
    }
    let m = date.getMonth() + 1;
    if ((date.getMonth() + 1) < 10) {
      month = '0' + m.toString();
    } else {
      month = m.toString();
    }
    year = date.getFullYear().toString();
    return (year + '-' + month + '-' + day) ;
  }
  changeHourInDateFormat(date: Date, increaseAmount: number ): Date {
    date.setHours(date.getHours() + increaseAmount);
    return date;
  }
  levelDates(date1: Date, date2: Date ): Record<string, string> {
    let difference = date1.getHours() - date2.getHours();
    let datestring1: string;
    let datestring2: string;
    if (difference > 0) {
      datestring2 = this.changeHour(date2, 6);
      datestring1 = this.changeHour(date1, 0);
    } else if (difference < 0) {
      datestring1 = this.changeHour(date1, 6);
      datestring2 = this.changeHour(date2, 0);
    } else {
      datestring1 = this.changeHour(date1, 0);
      datestring2 = this.changeHour(date2, 0);
    }
    return {'date1': datestring1, 'date2': datestring2};
  }
  compareDate(date1: Date, date2: Date): boolean {
    let levelledDates = this.levelDates(date1, date2);
    let dateString1 = levelledDates['date1'];
    let dateString2 = levelledDates['date2'];
    return dateString1 <= dateString2 ;
  }
}
