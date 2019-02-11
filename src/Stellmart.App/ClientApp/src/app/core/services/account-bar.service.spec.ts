import { TestBed } from '@angular/core/testing';

import { AccountBarService } from './account-bar.service';

describe('AccountBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountBarService = TestBed.get(AccountBarService);
    expect(service).toBeTruthy();
  });
});
