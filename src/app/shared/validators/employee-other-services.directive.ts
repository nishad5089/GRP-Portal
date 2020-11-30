import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateChangeService} from '../services/dateChange.service';

export const employeeOtherServicesValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  if (control.get('serviceFrom').value && (control.get('serviceTill')).value) {
    const serviceFrom = new Date(control.get('serviceFrom').value.toString());
    const serviceTill = new Date(control.get('serviceTill').value.toString());
    return new DateChangeService().compareDate(serviceFrom , serviceTill) ? null : {'formValidationError' : true, 'message': 'Service from date cannot be later than service till date'};
  }
  return null;
};


