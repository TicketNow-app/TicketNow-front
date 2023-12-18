export interface Address {
  id: string;
  complement: string;
  number: string;
  zipcode: string;
  latitude: string;
  longitude: string;
}

export interface AdressComplete extends Address {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}
