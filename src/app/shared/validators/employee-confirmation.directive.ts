import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateChangeService} from '../services/dateChange.service';

export const employeeConfirmationValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  if (control.get('confirmationDate').value) {
    const dateOfAward = new Date(control.get('confirmationDate').value.toString());
    const currentDate = new DateChangeService().changeHourInDateFormat(new Date(), 6);
    return (dateOfAward <= currentDate) ? null : {'formValidationError' : true, 'message': 'Date of confirmation cannot be from future'};
  }
};


