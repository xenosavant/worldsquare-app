import { Directive, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

declare var google:any;

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
    let location_obj = {};
    for (let i in place.address_components) {
      let item = place.address_components[i];
      
      location_obj['formatted_address'] = place.formatted_address;
      if(item['types'].indexOf("locality") > -1) {
        location_obj['locality'] = item['long_name']
      } else if (item['types'].indexOf("administrative_area_level_1") > -1) {
        location_obj['admin_area_l1'] = item['short_name']
      } else if (item['types'].indexOf("street_number") > -1) {
        location_obj['street_number'] = item['short_name']
      } else if (item['types'].indexOf("route") > -1) {
        location_obj['route'] = item['long_name']
      } else if (item['types'].indexOf("country") > -1) {
        location_obj['country'] = item['long_name']
      } else if (item['types'].indexOf("postal_code") > -1) {
        location_obj['postal_code'] = item['short_name']
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