import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/shared/services/api/account/account.service';
import { FormValidationService } from 'src/app/shared/services/form-validation/form-validation.service';
import { ForgotPasswordRequest } from 'src/app/shared/models/account/forgot-password-request.model';
import { ForgotPasswordResponse } from 'src/app/shared/models/account/forgot-password-response.model';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  private success: boolean;
  private form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private formValidationService: FormValidationService
  ) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public send(): void {
    if (this.form.valid) {
      const request: ForgotPasswordRequest = {
        email: this.form.value.email
      };

      this.accountService
        .forgotPassword(request)
        .subscribe((result: ForgotPasswordResponse) => {
          this.success = true;
        });
    } else {
      this.formValidationService.validateAllFormFields(this.form);
    }
  }
}
