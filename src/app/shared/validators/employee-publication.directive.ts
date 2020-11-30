import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateChangeService} from '../services/dateChange.service';

export const employeePublicationValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  if (control.get('dateOfPublication').value) {
    const dateOfAward = new Date(control.get('dateOfPublication').value.toString());
    const currentDate = new DateChangeService().changeHourInDateFormat(new Date(), 6);
    return (dateOfAward <= currentDate) ? null : {'formValidationError' : true, 'message': 'Date of publication cannot be from future'};
  }
};


