import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../reducers/app.reducer';
import { appQuery } from '../selectors/app.selectors';
import { AppConfig } from '../../app.config';
import { LoadConfig } from '../actions/app.actions';

@Injectable({
  providedIn: 'root'
})
export class AppFacade {
  constructor(private store: Store<AppState>) {}

  public getConfig: Observable<AppConfig> = this.store.pipe(
    select(appQuery.getConfig)
  );

  public loadConfig(): void {
    this.store.dispatch(new LoadConfig());
  }
}
