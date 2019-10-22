import { Action, createReducer, on } from '@ngrx/store';
import { Hotel } from 'src/app/models/hotel';
import { LoadFavoriteHotelsSuccess } from './favorite-hotels.actions';


export const favoriteHotelsFeatureKey = 'favoriteHotels';

export type State = Hotel[];
export const initialState: State = [];

const favoriteHotelsReducer = createReducer(initialState,
  on(LoadFavoriteHotelsSuccess, (state: State, { favorites }) => {
    const cloneState = favorites;
    return cloneState;
  }),
);

export function favoriteReducer(state: State | undefined, action: Action) {
  return favoriteHotelsReducer(state, action);
}
