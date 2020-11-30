import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateChangeService} from '../services/dateChange.service';

export const employeeChildrenInfoValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  if (control.get('birthDate').value) {
    const dateOfAward = new Date(control.get('birthDate').value.toString());
    const currentDate = new DateChangeService().changeHourInDateFormat(new Date(), 6);
    return (dateOfAward <= currentDate) ? null : {'formValidationError' : true, 'message': 'Date of birth cannot be from future'};
  }
};


