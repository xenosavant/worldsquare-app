import { TestBed, inject } from '@angular/core/testing';

import { AuthConfigService } from './auth-config.service';

describe('AuthConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthConfigService]
    });
  });

  it('should be created', inject([AuthConfigService], (service: AuthConfigService) => {
    expect(service).toBeTruthy();
  }));
});
