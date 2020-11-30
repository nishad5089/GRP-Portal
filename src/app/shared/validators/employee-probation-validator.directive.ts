import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateChangeService} from '../services/dateChange.service';

export const employeeProbationValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  let probationValidated = true;
  let extendedProbationValidated = true;
  if (control.get('probationFrom').value && (control.get('probationTill')).value) {
    const probationFrom = new Date(control.get('probationFrom').value.toString());
    const probationTill = new Date(control.get('probationTill').value.toString());
    const leveledProbationFrom = new Date(new DateChangeService().changeHour(probationFrom, 6)).getTime();
    const leveledProbationTill = new Date(new DateChangeService().changeHour(probationTill, 6)).getTime();
    // (leveledProbationFrom <= leveledProbationTill) ? null : {'formValidationError' : true, 'message': 'normal'};
    (leveledProbationFrom <= leveledProbationTill) ? probationValidated = true : probationValidated = false;
  }
  if (control.get('extendedProbationFrom').value && (control.get('extendedProbationTill')).value) {
    const extendedProbationFrom = new Date(control.get('extendedProbationFrom').value.toString());
    const extendedProbationTill = new Date(control.get('extendedProbationTill').value.toString());
    const leveledExtendedProbationFrom = new Date(new DateChangeService().changeHour(extendedProbationFrom, 6)).getTime();
    const leveledExtendedProbationTill = new Date(new DateChangeService().changeHour(extendedProbationTill, 6)).getTime();
    // return (leveledExtendedProbationFrom <= leveledExtendedProbationTill) ? null : {'formValidationError' : true, 'message': 'extended'};
    (leveledExtendedProbationFrom <= leveledExtendedProbationTill) ? extendedProbationValidated = true : extendedProbationValidated = false;
  }
  if (!probationValidated) {
    return {'formValidationError' : true, 'message': 'Probation from date cannot be later than probation till date'};
  }
  if (!extendedProbationValidated) {
    return {'formValidationError' : true, 'message': 'Extended Probation from date cannot be later than Extended Probation till date'};
  }
  return null;
};


