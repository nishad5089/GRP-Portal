import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const employeeEducationQualificationValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  if (control.get('yearOfPassing').value) {
    const yearOfPassing = control.get('yearOfPassing').value ;
    const currentYear = new Date().getFullYear();
    return (yearOfPassing <= currentYear) ? null : {'formValidationError' : true, 'message': 'Year Of Passing cannot be from future'};
  }
};


