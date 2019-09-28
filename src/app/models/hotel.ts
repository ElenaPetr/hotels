import { Profile } from './profile';
import { Weather } from './weather';

export interface Hotel {
  id: number;
  title: string;
  address: string;
  description: string;
  phone: string;
  picture: string;
  photos: string[];
  weather: Weather;
  profile: Profile;
  stars: number;
}
