import { Action, createReducer, on } from '@ngrx/store';
import { Hotel } from 'src/app/models/hotel';
import { LoadHotelsSuccess, LoadHotelsError } from './hotels.actions';


export const hotelsFeatureKey = 'hotels';

export type State = Hotel[];
export const initialState: State = [];

const allHotelsReducer = createReducer(initialState,
  on(LoadHotelsSuccess, (state: State, { hotels }) => {
    console.log(hotels, 'from hotels reduser');
    return hotels;
  }),
  on(LoadHotelsError, (state: State) => {
    return [];
  }),
);

export function hotelsReducer(state: State | undefined, action: Action) {
  return allHotelsReducer(state, action);
}
