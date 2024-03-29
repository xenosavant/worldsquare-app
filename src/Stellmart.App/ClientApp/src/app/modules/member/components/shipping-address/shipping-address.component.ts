import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../../../../shared/services/form-validation/form-validation.service';
import { GooglePlacesResponse } from '../../models/google-places-response.model';
import { LocationResponse } from '../../models/location-response.model';
import { LocationService } from '../../services/location.service';
import { LocationRequest } from '../../models/location-request.model';

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
      fullName: ['', Validators.required],
      route: ['', Validators.required],
      street_number: ['', Validators.required],
      locality: '',
      administrative_area_level_1: ['', Validators.required],
      administrative_area_level_2: '',
      sublocality_level_1: [''],
      neighborhood: [''],
      postal_code: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  public setAddress(addrObj: GooglePlacesResponse): void {
    this.zone.run(() => {
      this.googlePlacesResponse = addrObj;

      this.form.patchValue(this.googlePlacesResponse);
    });
  }

  public getShippingAddresses(): void {
    this.locationService.getShippingAddresses().subscribe(
      (addresses: LocationResponse[]) => {
        this.shippingAddresses = addresses;
        this.shippingAddresses.map((result: LocationResponse) => {
          result.parsedAddress = JSON.parse(result.locationComponentsFromApp);
       });
      });
  }

  public save(): void {
    if (this.form.valid) {

      const request: LocationRequest = {
        locationComponentsFromApp: JSON.stringify(this.form.value),
        address: this.googlePlacesResponse.formatted_address,
        latitude: this.googlePlacesResponse.latitude,
        longtitude: this.googlePlacesResponse.longtitude
      };

      this.locationService.save(request)
        .subscribe((result: LocationResponse) => {
          this.getShippingAddresses();
        });
    } else {
      this.formValidationService.validateAllFormFields(this.form);
    }
  }

  public setDefault(model: LocationResponse): void {
    const request: LocationRequest = {
      id: model.id
    };

    this.locationService.setDefault(request)
      .subscribe((result: LocationResponse) => {
        this.getShippingAddresses();
      });
  }

  public delete(model: LocationResponse): void {
    const request: LocationRequest = {
      id: model.id
    };

    this.locationService.delete(request)
      .subscribe((result: LocationResponse) => {
        this.getShippingAddresses();
      });
  }
}
