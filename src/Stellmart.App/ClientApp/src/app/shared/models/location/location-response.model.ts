import { GooglePlacesResponse } from '../google-places-response.model';

export interface LocationResponse {
    id: number;
    address: string;
    locationComponentsFromApp: string;
    locationComponentsFromGoogleApi: string;
    isActive: boolean;
    isDefault: boolean;
    parsedAddress: GooglePlacesResponse;
}
