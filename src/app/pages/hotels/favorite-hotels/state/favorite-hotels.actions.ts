import { Action, props, createAction } from '@ngrx/store';
import { Hotel } from 'src/app/models/hotel';
export const LoadFavoriteHotels = createAction('[FavoriteHotels] Load FavoriteHotels');
// tslint:disable-next-line: max-line-length
export const LoadFavoriteHotelsSuccess = createAction('[FavoriteHotels] set FavoriteHotels success', props<{ favorites: Hotel[] }>());
export const AddFavoriteHotel = createAction('[Favorite] add hotel', props<{ hotel: Hotel }>());

export const DeleteFavoriteHotel = createAction('[Favorite] delete hotel', props<{ id: number }>());
