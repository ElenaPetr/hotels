import {Comment} from './comment';

export interface HotelComments {
    id: number;
    hotelId: number;
    comments: Comment[];
}
