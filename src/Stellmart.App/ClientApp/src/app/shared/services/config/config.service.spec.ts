import { TestBed, inject } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers:
      [
        ConfigService,
      ]
    });
  });

  it('should be created', inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();
  }));
});
