import { TestBed, inject } from '@angular/core/testing';

import { AuthValidationService } from './auth-validation.service';

describe('AuthValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthValidationService]
    });
  });

  it('should be created', inject([AuthValidationService], (service: AuthValidationService) => {
    expect(service).toBeTruthy();
  }));
});
