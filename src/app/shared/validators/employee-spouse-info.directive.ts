import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateChangeService} from '../services/dateChange.service';

export const employeeSpouseInfoValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  if (control.get('dateOfAward').value) {
    const dateOfAward = new Date(control.get('dateOfAward').value.toString());
    const currentDate = new DateChangeService().changeHourInDateFormat(new Date(), 6);
    return (dateOfAward <= currentDate) ? null : {'formValidationError' : true, 'message': 'Date of award cannot be from future'};
  }
};


