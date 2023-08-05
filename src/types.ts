export interface Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
}

export interface Location {
  id: number;
  locationId: string;
  locationName: string;
  locationType: string;
  locationDetails: string;
  numberofDevices: number;
  address: Address;
  locationsUserRole: string;
  active: boolean;
  newLocation: boolean;
  subscriptionActive: boolean;
  longitude: number;
  latitude: number;
}

export interface LocationsResponse {
  locations: Location[];
  numberOfLocations: number;
}
