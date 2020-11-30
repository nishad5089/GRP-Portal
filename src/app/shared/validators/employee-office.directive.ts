import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateChangeService} from '../services/dateChange.service';

export const employeeOfficeValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  let responsibilityTypeValidated = true;
  let responsibilityTypeNullValidated = true;
  let joinDatelastOfficeDateValidated = true;
  let statuslastOfficeDateValidated = true;
  if (!control.get('officeUnitOid').value || !(control.get('officeUnitPostOid')).value) {
    const responsibilityType = control.get('responsibilityType').value.toString();
    (responsibilityType === 'Not Assigned') ? responsibilityTypeValidated = true : responsibilityTypeValidated = false;
  }
  if (control.get('officeUnitOid').value && (control.get('officeUnitPostOid')).value) {
    const responsibilityType = control.get('responsibilityType').value.toString();
    (responsibilityType !== 'Not Assigned') ? responsibilityTypeNullValidated = true : responsibilityTypeNullValidated = false;
  }
  if (control.get('joiningDate').value && (control.get('lastOfficeDate')).value) {
    let joiningDate = new Date(control.get('joiningDate').value.toString());
    let lastOfficeDate = new Date(control.get('lastOfficeDate').value.toString());
    new DateChangeService().compareDate(joiningDate, lastOfficeDate) ? joinDatelastOfficeDateValidated = true : joinDatelastOfficeDateValidated = false;
  }
  if (control.get('status').value && (control.get('lastOfficeDate')).value) {
    const status = control.get('status').value.toString();
    const lastOfficeDate = new DateChangeService().changeHour(new Date(control.get('lastOfficeDate').value.toString()), 0);
    const currentDate = new DateChangeService().changeHour(new Date(), 0);
    ((currentDate > lastOfficeDate) && status === 'true') ? statuslastOfficeDateValidated = false : statuslastOfficeDateValidated = true;
  }
  if (!responsibilityTypeValidated) {
    return {'formValidationError' : true, 'message': 'Please select responsibility type \'Not Assigned\' in case of empty office Unit or office unit post'};
  }
  if (!responsibilityTypeNullValidated) {
    return {'formValidationError' : true, 'message': 'Please select responsibility type \'Not Assigned\' only in case of empty office Unit or office unit post'};
  }
  if (!joinDatelastOfficeDateValidated) {
    return {'formValidationError' : true, 'message': 'Joining date cannot be later than last office date'};
  }
  if (!statuslastOfficeDateValidated) {
    return {'formValidationError' : true, 'message': 'Status cannot remain active after last office date'};
  }
  return null;
};


