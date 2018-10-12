import { Directive, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

declare var google: any;

@Directive({
  selector: '[appGooglePlaces]'
})
export class GooglePlacesDirective implements OnInit {

  @Output()
  public selected: EventEmitter<any> = new EventEmitter();

  public element: HTMLInputElement;

  constructor(elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }

  public getFormattedAddress(place: any): {} {
    const location_obj: {} = {};

    for (const i of Object.keys(place.address_components)) {
      const item: any = place.address_components[i];

      location_obj['formatted_address'] = place.formatted_address;
      location_obj['latitude'] = place.geometry.location.lat();
      location_obj['longtitude'] = place.geometry.location.lng();

      if (item['types'].indexOf('locality') > -1) {
        location_obj['locality'] = item['long_name'];
      } else if (item['types'].indexOf('administrative_area_level_1') > -1) {
        location_obj['administrative_area_level_1'] = item['short_name'];
      } else if (item['types'].indexOf('administrative_area_level_2') > -1) {
        location_obj['administrative_area_level_2'] = item['short_name'];
      } else if (item['types'].indexOf('sublocality_level_1') > -1) {
        location_obj['sublocality_level_1'] = item['short_name'];
      } else if (item['types'].indexOf('neighborhood') > -1) {
        location_obj['neighborhood'] = item['short_name'];
      } else if (item['types'].indexOf('street_number') > -1) {
        location_obj['street_number'] = item['short_name'];
      } else if (item['types'].indexOf('route') > -1) {
        location_obj['route'] = item['long_name'];
      } else if (item['types'].indexOf('country') > -1) {
        location_obj['country'] = item['long_name'];
      } else if (item['types'].indexOf('postal_code') > -1) {
        location_obj['postal_code'] = item['short_name'];
      }
    }

    return location_obj;
  }

  public ngOnInit(): void {
    const autocomplete: any = new google.maps.places.Autocomplete(this.element);
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
      this.selected.emit(this.getFormattedAddress(autocomplete.getPlace()));
    });
  }
}
