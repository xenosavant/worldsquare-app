import { TestBed, inject } from '@angular/core/testing';

import { PassportService } from './passport.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PassportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [PassportService]
    });
  });

  it('should be created', inject([PassportService], (service: PassportService) => {
    expect(service).toBeTruthy();
  }));
});
