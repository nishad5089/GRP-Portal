import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateChangeService} from '../services/dateChange.service';

export const employeePersonalInfoValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  let dateOfBirthValidated = true;
  let maritalStatusGenderValidated = true;
  if (control.get('dateOfBirth').value) {
    const dateOfBirth = new Date(control.get('dateOfBirth').value.toString());
    const currentDate = new DateChangeService().changeHourInDateFormat(new Date(), 6);
    (dateOfBirth <= currentDate) ? dateOfBirthValidated = true : dateOfBirthValidated = false ;
  }
  if (control.get('gender').value && control.get('maritalStatus').value) {
    const gender = control.get('gender').value;
    const maritalStatus = control.get('maritalStatus').value;
    // return (dateOfBirth <= currentDate) ? dateOfBirthValidator = true : {'formValidationError' : true, 'message': 'Birth date cannot from future'};
    ((gender === 'Male' && maritalStatus === 'Widow') || (gender === 'Female' && maritalStatus === 'Widower')) ? maritalStatusGenderValidated = false : maritalStatusGenderValidated = true;
  }
  if (!dateOfBirthValidated) {
    return {'formValidationError' : true, 'message': 'Birth date cannot be from future'};
  }
  if (!maritalStatusGenderValidated) {
    return {'formValidationError' : true, 'message': 'Please select marital status \'Widower\' for gender \'Male\', or \'Widow\' for gender \'Female\''};
  }
  return null;
};


