import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ConfirmEmailRequest } from 'src/app/modules/account/models/confirm-email-request.model';
import { ConfirmEmailResponse } from 'src/app/modules/account/models/confirm-email-response.model';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  private _code: string;
  private _userId: string;
  private success: boolean;

  constructor(
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this._code = params['code'];
      this._userId = params['userId'];

      this.confirmEmail();
    });
  }

  public confirmEmail(): void {
    const request: ConfirmEmailRequest = {
      code: this._code,
      userId: this._userId
    };

    this.accountService
      .confirmEmail(request)
      .subscribe((result: ConfirmEmailResponse) => {
        this.success = true;
      });
  }
}
