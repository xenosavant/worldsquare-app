import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountBarFacade } from '../../store/facades/account-bar.facade';

@Component({
  selector: 'app-account-bar',
  templateUrl: './account-bar.component.html',
  styleUrls: ['./account-bar.component.css']
})
export class AccountBarComponent implements OnInit {
  private balance: Observable<string>;

  constructor(private facade: AccountBarFacade) {}

  public ngOnInit(): void {
    this.balance = this.facade.balance;
  }
}
