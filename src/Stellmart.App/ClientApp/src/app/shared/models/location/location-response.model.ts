import { GooglePlacesResponse } from '../google-places-response.model';

export interface LocationResponse {
    address: string;
    locationComponentsFromApp: string;
    locationComponentsFromGoogleApi: string;
    isActive: boolean;
    parsedAddress: GooglePlacesResponse;
}
