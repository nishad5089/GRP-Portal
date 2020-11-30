import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateChangeService} from '../services/dateChange.service';

export const employeeMedicalInfoValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  let fromTillValidated = true;
  let tillCurrentValidated = true;
  if (control.get('fromDate').value && (control.get('tillDate')).value) {
    const fromDate = new Date(control.get('fromDate').value.toString());
    const tillDate = new Date(control.get('tillDate').value.toString());
    // return (fromDate <= tillDate) ? fromTillValidated = true : {'formValidationError' : true, 'message': 'Illness From date cannot be later than Illness till date'};
    (fromDate <= tillDate) ? fromTillValidated = true : fromTillValidated = false;
  }
  if (control.get('fromDate').value && (control.get('tillDate')).value) {
    const currentDate = new DateChangeService().changeHourInDateFormat(new Date(), 6);
    const tillDate = new Date(control.get('tillDate').value.toString());
    // return (fromDate <= tillDate) ? fromTillValidated = true : {'formValidationError' : true, 'message': 'Illness From date cannot be later than Illness till date'};
    (tillDate <= currentDate) ? tillCurrentValidated = true : tillCurrentValidated = false;
  }
  if (!fromTillValidated) {
    return {'formValidationError' : true, 'message': 'Illness From date cannot be later than Illness till date'};
  }
  if (!tillCurrentValidated) {
    return {'formValidationError' : true, 'message': 'Illness till date cannot be later than current date'};
  }
  return null;
};


