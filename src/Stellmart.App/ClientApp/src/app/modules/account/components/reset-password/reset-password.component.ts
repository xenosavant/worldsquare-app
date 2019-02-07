import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AccountService } from 'src/app/shared/services/api/account/account.service';
import { FormValidationService } from 'src/app/shared/services/form-validation/form-validation.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatchOtherValidator } from 'src/app/shared/validators/match-other.validator';
import { ResetPasswordRequest } from 'src/app/shared/models/account/reset-password-request.model';
import { ResetPasswordResponse } from 'src/app/shared/models/account/reset-password-response.model';
import { SecurityQuestionsResponse } from 'src/app/shared/models/account/security-questions-response.model';
import { Dictionary } from 'src/app/shared/models/dictionary.model';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  public securityQuestionsRequest: string[];
  public securityQuestionsResponse: string[];
  public securityQuestionsKeyPair: { [key: string]: string } = {};

  public securityAnswersRequest: string[];
  public securityAnswersKeyPair: { [key: string]: string } = {};

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
      ],
      securityAnswerFirst: ['', Validators.required],
      securityAnswerSecond: ['', Validators.required]
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this._code = params['code'];
      this._userId = params['userId'];

      this.getSecurityQuestionsForUser();
    });
  }

  public getSecurityQuestionsForUser(): void {

    const paramsValues: Dictionary[] = [
      {
        key: 'userId',
        value: this._userId
      },
      {
        key: 'code',
        value: this._code
      }
    ];

    this.accountService.getSecurityQuestionsForUser(paramsValues)
      .subscribe((data: SecurityQuestionsResponse[]) => {
        this.securityQuestionsResponse = data.map((x: SecurityQuestionsResponse) => x.question);
      });
  }

  public populateQuestions(which: string, $event: any): void {
    // known Angular bug for null in Select element
    if ($event.target.value !== 'null') {
      this.securityQuestionsKeyPair[which] = $event.target.value;
    } else {
      this.securityQuestionsKeyPair[which] = null;
    }

    // save selected questions into array for back end
    this.securityQuestionsRequest = Object.keys(this.securityQuestionsKeyPair).map((question: string) => this.securityQuestionsKeyPair[question]);
  }

  public populateAnswers(which: string, $event: any): void {
    // known Angular bug for null in Select element
    if ($event.target.value !== 'null') {
      this.securityAnswersKeyPair[which] = $event.target.value;
    } else {
      this.securityAnswersKeyPair[which] = null;
    }

    // save selected questions into array for back end
    this.securityAnswersRequest = Object.keys(this.securityAnswersKeyPair).map((answer: string) => this.securityAnswersKeyPair[answer]);
  }

  public reset(): void {
    if (this._form.valid) {
      const request: ResetPasswordRequest = {
        password: this._form.value.password,
        confirmpassword: this._form.value.confirmpassword,
        code: this._code,
        userId: this._userId,
        securityAnswers: this.securityAnswersRequest
      };

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
