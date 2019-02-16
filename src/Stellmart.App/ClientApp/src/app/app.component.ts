import { Component, OnInit } from '@angular/core';
import { AppFacade } from './store/facades/app,facade';
import { AppConfig } from './app.config';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private facade: AppFacade) {}

  public ngOnInit(): void {
    this.facade.loadConfig();
  }
}
