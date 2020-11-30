import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateChangeService} from '../services/dateChange.service';

export const employeeDisciplinaryActionValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  if (control.get('date').value) {
    const dateOfAward = new Date(control.get('date').value.toString());
    const currentDate = new DateChangeService().changeHourInDateFormat(new Date(), 6);
    return (dateOfAward <= currentDate) ? null : {'formValidationError' : true, 'message': 'Date cannot be from future'};
  }
};


