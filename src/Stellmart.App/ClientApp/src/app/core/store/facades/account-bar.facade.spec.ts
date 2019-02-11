import { TestBed } from '@angular/core/testing';

import { AccountBarFacade } from './account-bar.facade';

describe('AccountBarFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountBarFacade = TestBed.get(AccountBarFacade);
    expect(service).toBeTruthy();
  });
});
