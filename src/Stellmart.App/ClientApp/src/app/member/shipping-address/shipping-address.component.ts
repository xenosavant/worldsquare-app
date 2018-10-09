import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../../shared/services/form-validation/form-validation.service';
import { GooglePlacesResponse } from '../../shared/models/google-places-response.model';
import { LocationResponse } from '../../shared/models/location/location-response.model';
import { LocationService } from '../../shared/services/api/location/location.service';
import { LocationRequest } from '../../shared/models/location/location-request.model';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {

  public shippingAddresses: LocationResponse[];
  public googlePlacesResponse: GooglePlacesResponse;
  public form: FormGroup;

  constructor(
    private zone: NgZone,
    private formValidationService: FormValidationService,
    private formBuilder: FormBuilder,
    private locationService: LocationService
  ) {

  }

  public addrKeys: string[];
  public addr: object;

  public ngOnInit(): void {
    this.getShippingAddresses();

    this.form = this.formBuilder.group({
      search: ['', Validators.required],
      route: ['', Validators.required],
      street_number: ['', Validators.required],
      locality: ['', Validators.required],
      administrative_area_level_1: ['', Validators.required],
      administrative_area_level_2: ['', Validators.required],
      sublocality_level_1: [''],
      neighborhood: [''],
      postal_code: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  public setAddress(addrObj: GooglePlacesResponse): void {
    this.zone.run(() => {
      this.googlePlacesResponse = addrObj;

      this.form.patchValue({
        route: this.googlePlacesResponse.route,
        street_number: this.googlePlacesResponse.street_number,
        locality: this.googlePlacesResponse.locality,
        administrative_area_level_1: this.googlePlacesResponse.administrative_area_level_1,
        administrative_area_level_2: this.googlePlacesResponse.administrative_area_level_2,
        sublocality_level_1: this.googlePlacesResponse.sublocality_level_1,
        neighborhood: this.googlePlacesResponse.neighborhood,
        postal_code: this.googlePlacesResponse.postal_code,
        country: this.googlePlacesResponse.country
      });
    });
  }

  public getShippingAddresses(): void {
    this.locationService.getShippingAddresses().subscribe(
      (addresses: LocationResponse[]) => {
        this.shippingAddresses = addresses;
      });
  }

  public save(): void {
    if (this.form.valid) {

      const request: LocationRequest = {
        locationComponentsFromApp: JSON.stringify(this.form.value)
      };

      this.locationService.create(request)
        .subscribe((result: LocationResponse) => {

        });
    } else {
      this.formValidationService.validateAllFormFields(this.form);
    }
  }
}
