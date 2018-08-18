import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  public validateAllFormFields(formGroup: FormGroup|FormArray): void {
      Object.keys(formGroup.controls).forEach((field: string) => {
          const control: AbstractControl = formGroup.get(field);
          if (control instanceof FormControl) {
              control.markAsDirty({ onlySelf: true });
          } else if (control instanceof FormGroup || control instanceof FormArray) {
              this.validateAllFormFields(control);
          }
      });
  }

  // returns false if no error, returns true if error
  public isFieldInvalid(form: FormGroup, field: Array<string>|string, errorType: string): boolean {
      return form.get(field).hasError(errorType) && form.get(field).dirty;
  }

  public isControlValid(form: FormGroup, field: string): boolean {
      return form.controls[field].valid;
  }

  public isControlType(form: FormGroup, field: string, type: string): boolean {
          const element: Element = document.querySelector('input[name="' + field + '"]');
          if (element.getAttribute('type') === type) {
              return true;
          }
      }
}
