import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateChangeService} from '../services/dateChange.service';

export const employeeMasterInfoValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  return null;
  if (control.get('joinDate').value && (control.get('gazettedDate')).value) {
    const joinDate = new Date(control.get('joinDate').value.toString());
    const gazettedDate = new Date(control.get('gazettedDate').value.toString());
    return new DateChangeService().compareDate(gazettedDate, joinDate) ? null : {'formValidationError' : true, 'message': 'Gazetted date cannot be later than Join date'};
  }
  return null;
};


