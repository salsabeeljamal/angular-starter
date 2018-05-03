import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from '../user.reducer';
import * as fromBook from './book.reducer';

export interface State {

  user: fromUser.State;
  book: fromBook.State;
}

export const reducers: ActionReducerMap<State> = {

  user: fromUser.reducer,
  book: fromBook.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
