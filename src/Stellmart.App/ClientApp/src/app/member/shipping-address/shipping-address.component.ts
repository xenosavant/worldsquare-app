import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../../shared/services/form-validation/form-validation.service';
import { GooglePlacesResponse } from '../../shared/models/google-places-response.model';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {

  public googlePlacesResponse: GooglePlacesResponse;
  public form: FormGroup;

  constructor(
    private zone: NgZone,
    private formValidationService: FormValidationService,
    private formBuilder: FormBuilder
  ) {

  }

  public addrKeys: string[];
  public addr: object;

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: ['', Validators.required],
      route: ['', Validators.required],
      street_number: ['', Validators.required],
      locality: ['', Validators.required],
      administrative_area_level_1: ['', Validators.required],
      administrative_area_level_2: ['', Validators.required],
      sublocality_level_1: ['', Validators.required],
      neighborhood: ['', Validators.required],
      postal_code: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  public setAddress(addrObj: GooglePlacesResponse): void {
    this.zone.run(() => {
      this.googlePlacesResponse = addrObj;
    });
  }
}
