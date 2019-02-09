import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldErrorComponent } from 'src/app/shared/components/field-error/field-error.component';
import { DropdownComponent } from 'src/app/shared/components/dropdown/dropdown.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { ConfigServiceMock } from 'test/app/shared/services/config-service.mock';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: ConfigService, useValue: new ConfigServiceMock() }
      ],
      declarations:
      [
        SignupComponent,
        FieldErrorComponent,
        DropdownComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
