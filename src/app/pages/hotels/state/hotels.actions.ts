import { createAction, props } from '@ngrx/store';

import { Hotel } from 'src/app/models/hotel';
import { PageEvent } from '@angular/material';
export const LoadHotels = createAction('[Hotels] Load Hotels', props<{ page: Partial<PageEvent> }>());
export const LoadHotelsSuccess = createAction('[Hotels] set Hotels success', props<{ hotels: Hotel[] }>());
export const LoadHotelsError = createAction('[FavoriteHotels] set Hotels error', props<{ hotels: null }>());
