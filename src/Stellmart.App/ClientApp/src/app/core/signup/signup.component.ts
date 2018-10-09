import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from '../../shared/services/form-validation/form-validation.service';
import { AccountService } from '../../shared/services/api/account/account.service';
import { SignupResponse } from '../../shared/models/account/signup-response.model';
import { SignupRequest } from '../../shared/models/account/signup-request.model';
import { MatchOtherValidator } from '../../shared/validators/match-other.validator';
import { PasswordPatternValidator } from '../../shared/validators/password-pattern.validator';
import { SecurityQuestionsResponse } from '../../shared/models/account/security-questions-response.model';
import { AuthenticationService } from '../../shared/services/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public securityQuestionsRequest: string [];
  public securityQuestionsResponse: string [];
  public securityQuestionsKeyPair: { [key: string]: string } = {};

  public securityAnswersRequest: string [];
  public securityAnswersKeyPair: { [key: string]: string } = {};

  private form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private formValidationService: FormValidationService,
    private authenticationService: AuthenticationService
  ) {

  }

  public ngOnInit(): void {
    this.getSecurityQuestions();

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required, Validators.email, MatchOtherValidator.validate('email')]],
      password: ['', [Validators.required, PasswordPatternValidator.validate()]],
      securityAnswerFirst: ['', Validators.required],
      securityAnswerSecond: ['', Validators.required]
    });
  }

  public signup(): void {
    if (this.form.valid) {

      const request: SignupRequest = {
        email: this.form.value.email,
        password: this.form.value.password,
        securityQuestions: this.securityQuestionsRequest,
        securityAnswers: this.securityAnswersRequest
      };

      this.accountService.signup(request)
        .subscribe((result: SignupResponse) => {
          this.authenticationService.Authorize();
        });
    } else {
      this.formValidationService.validateAllFormFields(this.form);
    }
  }

  public getSecurityQuestions(): void {
    this.accountService.getSecurityQuestions()
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
    this.securityQuestionsRequest = Object.keys(this.securityQuestionsKeyPair).map( (question: string) => this.securityQuestionsKeyPair[question]);
  }

  public populateAnswers(which: string, $event: any): void {
    // known Angular bug for null in Select element
    if ($event.target.value !== 'null') {
      this.securityAnswersKeyPair[which] = $event.target.value;
    } else {
      this.securityAnswersKeyPair[which] = null;
    }

    // save selected questions into array for back end
    this.securityAnswersRequest = Object.keys(this.securityAnswersKeyPair).map( (answer: string) => this.securityAnswersKeyPair[answer]);
  }
}
