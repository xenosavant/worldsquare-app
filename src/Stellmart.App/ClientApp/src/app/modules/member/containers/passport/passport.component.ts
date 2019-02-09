import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.css']
})
export class PassportComponent implements OnInit {

  constructor(private store: Store<any>) { }

  public ngOnInit(): void {
  }

}
