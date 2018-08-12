import { TestBed, inject } from '@angular/core/testing';

import { AuthConfigurationService } from './auth-config.service';

describe('AuthConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthConfigurationService]
    });
  });

  it('should be created', inject([AuthConfigurationService], (service: AuthConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
