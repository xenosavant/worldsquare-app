import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../shared/services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  public ngOnInit(): void {
  }

  public login(): void {
    this.authenticationService.Authorize();
  }

  public logout(): void {
    this.authenticationService.Logoff();
  }

  public isAuthorized(): boolean {
    return this.authenticationService.isAuthorized();
  }
}
