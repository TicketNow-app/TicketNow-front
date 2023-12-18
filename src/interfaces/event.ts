import { AdressComplete } from '../interfaces/address';

export interface Event {
  id: string;
  name: string;
  description: string;
  start: string;
  end: string;
  company: string;
}

export interface readAllEventsResponse {
  Event: Event;
  Address: AdressComplete;
  Images: string[];
}
