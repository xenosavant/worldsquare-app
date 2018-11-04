import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResetPasswordRequest } from 'src/app/shared/models/account/reset-password-request.model';
import { AccountService } from 'src/app/shared/services/api/account/account.service';
import { ResetPasswordResponse } from 'src/app/shared/models/account/reset-password-response.model';
import { FormValidationService } from 'src/app/shared/services/form-validation/form-validation.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  private success: boolean;
  private form: FormGroup;

  constructor
  (
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private formValidationService: FormValidationService
  ) {
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public send(): void {
    if (this.form.valid) {

      const request: ResetPasswordRequest = {
        email: this.form.value.email
      };

      this.accountService.resetPassword(request)
        .subscribe((result: ResetPasswordResponse) => {
          this.success = true;
        });
    } else {
      this.formValidationService.validateAllFormFields(this.form);
    }
  }
}
