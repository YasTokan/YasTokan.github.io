import { ValidationErrors, ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidators {
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }

  static passwordMatchValidator(control: AbstractControl): ValidationErrors | null {


    const password: string = control?.get('password')?.value;
    const confirmPassword: string = control?.get('passwordCon')?.value;
    if (password !== confirmPassword) {
      control?.get('passwordCon')?.setErrors({ NoPasswordMatch: true });
    }
    return null;
  }
}

export const atLeastOne = (validator: ValidatorFn, controls: string[] = []) => (
  group: FormGroup,
): ValidationErrors | null => {
  if (!controls) {
    controls = Object.keys(group.controls);
  }

  const hasAtLeastOne = group && group.controls && controls
    .some(k => !validator(group.controls[k]));

  return hasAtLeastOne ? null : {
    atLeastOne: true,
  };
};
