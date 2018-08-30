import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {

    @Input()
    public collection: string[];

    @Input()
    public selected: string;

    @Output()
    public dropdownSelected: EventEmitter<any> = new EventEmitter<any>();

    public ngOnInit(): void {
      console.log(this.collection);
    }

    public select(selection: any): void {
        this.dropdownSelected.emit(selection);
    }
}
