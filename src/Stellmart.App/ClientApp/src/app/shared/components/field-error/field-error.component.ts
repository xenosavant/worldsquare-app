import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss']
})

export class FieldErrorComponent {
    @Input()
    public errorMessage: string;

    @Input()
    public displayError: boolean;
}
