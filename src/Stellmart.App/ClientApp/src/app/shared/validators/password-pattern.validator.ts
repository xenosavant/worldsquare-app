import { FormControl } from '@angular/forms';

export class PasswordPatternValidator {
    public static validate(): any {

        return function passwordPatternValidate(control: FormControl): any {
            if (!control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/)) {
                return { 'invalidPassword': true };
            }

            return null;
        };
    }
}
