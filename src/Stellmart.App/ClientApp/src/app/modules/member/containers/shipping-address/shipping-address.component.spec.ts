import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingAddressComponent } from './shipping-address.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ShippingAddressComponent', () => {
  let component: ShippingAddressComponent;
  let fixture: ComponentFixture<ShippingAddressComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ShippingAddressComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingAddressComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
