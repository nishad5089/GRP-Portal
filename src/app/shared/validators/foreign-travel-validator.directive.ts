import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateChangeService} from '../services/dateChange.service';

export const foreignTravelValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  if (control.get('travelFrom').value && (control.get('travelTill')).value) {
    const travelFrom = new Date(control.get('travelFrom').value.toString());
    const travelTill = new Date(control.get('travelTill').value.toString());
    const leveledTravelFrom = new Date(new DateChangeService().changeHour(travelFrom, 6)).getTime();
    const leveledTravelTill = new Date(new DateChangeService().changeHour(travelTill, 6)).getTime();
    return (leveledTravelFrom <= leveledTravelTill) ? null : {'formValidationError' : true, 'message': 'Travel From date cannot be later than travel till date'};
   }
  return null;
};


