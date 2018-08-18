import { FormControl } from '@angular/forms';

export class DropDownValidator {
    public static validate(): any {

        return function dropDownValidate(control: FormControl): any {
            if (control.value > 0) {
                return null;
            }

            return {
                'dropDownValidator': true
            };
        };
    }
}
