import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AccountBarState } from '../reducers/account-bar.reducer';
import { Observable } from 'rxjs';
import { accountBarQuery } from '../selectors/account-bar.selectors';
import { LoadAccountBar } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class AccountBarFacade {
  constructor(private store: Store<AccountBarState>) {}

  public balance: Observable<string> = this.store.pipe(
    select(accountBarQuery.getAccountBar)
  );

  public loaded: Observable<boolean> = this.store.pipe(
    select(accountBarQuery.getAccountBarLoaded)
  );

  public error: Observable<any> = this.store.pipe(
    select(accountBarQuery.getAccountBarError)
  );

  public loadAccountBar(): void {
    this.store.dispatch(new LoadAccountBar());
  }
}
