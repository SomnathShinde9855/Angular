import { createSelector, createFeatureSelector, State } from '@ngrx/store';
import { CounterState } from './app.state';

export const selectCounterState =
  createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count
);
