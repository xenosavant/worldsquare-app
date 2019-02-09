import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportComponent } from './passport.component';
import { Store, StoreModule } from '@ngrx/store';

describe('PassportComponent', () => {
  let component: PassportComponent;
  let fixture: ComponentFixture<PassportComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ PassportComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
