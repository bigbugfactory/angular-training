import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function checkIfOtherThanZero(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        return control.value === 0 ? { nullValue: control.value } : null;
    }
}