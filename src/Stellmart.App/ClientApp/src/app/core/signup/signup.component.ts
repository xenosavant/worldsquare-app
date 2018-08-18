import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from '../../shared/services/form-validation/form-validation.service';
import { AccountService } from '../../shared/services/account/account.service';
import { SignupResponse } from '../../shared/models/account/signup-response.model';
import { SignupRequest } from '../../shared/models/account/signup-request.model';
import { MatchOtherValidator } from '../../shared/validators/match-other.validator';
import { PasswordPatternValidator } from '../../shared/validators/password-pattern.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private formValidationService: FormValidationService
  ) {

  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required, Validators.email, MatchOtherValidator.validate('email')]],
      password: ['', [Validators.required, PasswordPatternValidator.validate()]]
    });
  }

  public register(): void {
    const request: SignupRequest = {
      email: '',
      password: '',
      securityStrings: []
    };

    if (this.form.valid) {

      this.accountService.register(request)
        .subscribe((result: SignupResponse) => {

        });
    } else {
      this.formValidationService.validateAllFormFields(this.form);
    }
  }
}
