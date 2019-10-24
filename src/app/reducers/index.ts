import { IEntittyState } from './index';
import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Hotel } from '../models/hotel';
import { favoriteReducer } from '../pages/hotels/favorite-hotels/state/favorite-hotels.reducer';
import { hotelsReducer } from '../pages/hotels/state/hotels.reducer';

export interface IEntittyState<T> {
    isLoading: boolean;
    data: T[];
    entities: { [key: string]: T };
}

export const stateFeatureKey = 'state';

export interface IRootState {
    favoriteHotels: Hotel[];
    hotels: Hotel[];
}

export const reducers: ActionReducerMap<IRootState> = {
    favoriteHotels: favoriteReducer,
    hotels: hotelsReducer,
};


export const metaReducers: MetaReducer<IRootState>[] = !environment.production ? [] : [];
