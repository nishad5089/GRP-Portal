import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateChangeService} from '../services/dateChange.service';

export const employeeTrainingInfoValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  if (control.get('trainingFrom').value && (control.get('trainingTill')).value) {
    const trainingFrom = new Date(control.get('trainingFrom').value.toString());
    const trainingTill = new Date(control.get('trainingTill').value.toString());
    const leveledTrainingFrom = new Date(new DateChangeService().changeHour(trainingFrom, 6)).getTime();
    const leveledTrainingTill = new Date(new DateChangeService().changeHour(trainingTill, 6)).getTime();
    return (leveledTrainingFrom <= leveledTrainingTill) ? null : {'formValidationError' : true, 'message': 'Training from date cannot be later than training till date'};
  }
  return null;
};


