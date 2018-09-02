import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from '../../shared/services/form-validation/form-validation.service';
import { AccountService } from '../../shared/services/account/account.service';
import { SignupResponse } from '../../shared/models/account/signup-response.model';
import { SignupRequest } from '../../shared/models/account/signup-request.model';
import { MatchOtherValidator } from '../../shared/validators/match-other.validator';
import { PasswordPatternValidator } from '../../shared/validators/password-pattern.validator';
import { SecurityQuestionsResponse } from '../../shared/models/account/security-questions-response.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public securityQuestions: string [];
  public securityQuestionsResponse: string [];
  public securityQuestionsKeyPair: { [key: string]: string } = {};
  // this.kmet = Object.keys(this.resultSet).map(it => this.resultSet[it]);

  private form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private formValidationService: FormValidationService
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
    const request: SignupRequest = {
      email: '',
      password: '',
      securityQuestions: [''],
      securityAnswers: ['']
    };

    if (this.form.valid) {

      this.accountService.signup(request)
        .subscribe((result: SignupResponse) => {

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

  // public selectQuestion(a: any, $event: any): void {
  //   console.log('k: '); console.log($event);

  //   console.log('kurec novak se zove: ' + a + ' in ' + $event.target.value);
  // }

  public selectQuestion(which: string, $event: any): void {
    // known Angular bug for null in Select element
    if ($event.target.value !== 'null') {
      this.securityQuestionsKeyPair[which] = $event.target.value;
    } else {
      this.securityQuestionsKeyPair[which] = null;
    }

    this.securityQuestions = Object.keys(this.securityQuestionsKeyPair).map( (question: string) => this.securityQuestionsKeyPair[question]);
  }
}
