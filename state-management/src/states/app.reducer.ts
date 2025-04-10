import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, setCounter } from './app.action';
import { CounterState } from './app.state';

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, () => ({ count: 0 })),
  on(setCounter, (state, { count }) => ({ ...state, count }))
);
