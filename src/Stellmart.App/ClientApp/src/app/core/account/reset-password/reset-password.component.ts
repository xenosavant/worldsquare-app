import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AccountService } from 'src/app/shared/services/api/account/account.service';
import { FormValidationService } from 'src/app/shared/services/form-validation/form-validation.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatchOtherValidator } from 'src/app/shared/validators/match-other.validator';
import { ResetPasswordRequest } from 'src/app/shared/models/account/reset-password-request.model';
import { ResetPasswordResponse } from 'src/app/shared/models/account/reset-password-response.model';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  private _form: FormGroup;
  private _isRegistered: boolean;
  private _formBuilder: FormBuilder;
  private _resetFlag: boolean;
  private success: boolean;

  private _code: string;
  private _userId: string;

  constructor(
    public formBuilder: FormBuilder,
    public accountService: AccountService,
    public formValidationService: FormValidationService,
    public activatedRoute: ActivatedRoute
  ) {
    this._formBuilder = formBuilder;
  }

  public ngOnInit(): void {
    this._form = this._formBuilder.group({
      password: ['', [Validators.required]],
      confirmpassword: [
        '',
        [Validators.required, MatchOtherValidator.validate('password')]
      ]
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this._code = params['code'];
      this._userId = params['userId'];
    });
  }

  public reset(): void {
    if (this._form.valid) {
      const request: ResetPasswordRequest = new ResetPasswordRequest();
      request.password = this._form.value.password;
      request.confirmpassword = this._form.value.confirmpassword;
      request.code = this._code;
      request.userId = this._userId;

      this.accountService.resetPassword(request);

      this.accountService
        .resetPassword(request)
        .subscribe((result: ResetPasswordResponse) => {
          this.success = true;
        });
    } else {
      this.formValidationService.validateAllFormFields(this._form);
    }
  }
}
