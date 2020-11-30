import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateChangeService} from '../services/dateChange.service';

export const fromDateToDateValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  if (control.get('fromDate').value && (control.get('toDate')).value) {
    const fromDate = new Date(control.get('fromDate').value.toString());
    const toDate = new Date(control.get('toDate').value.toString());
    const holidayDate = new Date(control.get('holidayDate').value.toString());
    const leveledFromDate = new Date(new DateChangeService().changeHour(fromDate, 6)).getTime();
    const leveledToDate = new Date(new DateChangeService().changeHour(toDate, 6)).getTime();
    const leveledHolidayDate = new Date(new DateChangeService().changeHour(holidayDate, 6)).getTime();
    return ((leveledFromDate <= leveledHolidayDate) && (leveledHolidayDate <= leveledToDate)) ? null : {'formValidationError' : true, 'message': 'Holiday From date cannot be later than Holiday till date"'} ;
   }
  return null;
};


