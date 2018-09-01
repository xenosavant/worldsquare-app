import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {

    @Input()
    public parentForm: FormGroup;

    @Input()
    public collection: string[];

    @Input()
    public selected: string;

    @Input()
    public controlName: string;

    @Output()
    public dropdownSelected: EventEmitter<any> = new EventEmitter<any>();

    public ngOnInit(): void {
      console.log('kurec'); console.log(this.parentForm);
      this.parentForm.addControl('age', new FormControl('', Validators.required));
      console.log(this.collection);
    }

    public select(selection: any): void {
        this.dropdownSelected.emit(selection);
    }
}
