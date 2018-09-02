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
    this.parentForm.addControl(this.controlName, new FormControl('', Validators.required));
  }

  public select($event: any): void {
    this.dropdownSelected.emit($event);
  }
}
