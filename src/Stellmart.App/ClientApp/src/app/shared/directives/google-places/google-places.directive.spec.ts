import { GooglePlacesDirective } from './google-places.directive';

describe('GooglePlacesDirective', () => {
  it('should create an instance', () => {
    const directive: GooglePlacesDirective = new GooglePlacesDirective(null);
    expect(directive).toBeTruthy();
  });
});
