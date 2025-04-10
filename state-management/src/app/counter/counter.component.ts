import { Component } from '@angular/core';
import {
  increment,
  decrement,
  reset,
  setCounter,
} from '../../states/app.action';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { selectCount } from '../../states/app.selector';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { CounterState } from '../../states/app.state';

@Component({
  selector: 'app-counter',
  imports: [CommonModule, FormsModule, AsyncPipe, NgIf],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  initialState$: Observable<number>;
  counter: number = 0;
  constructor(private store: Store<{ counter: CounterState }>) {
    this.initialState$ = this.store.select(selectCount);
  }
  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
  setCounter(value: number) {
    this.store.dispatch(setCounter({ count: value }));
  }
}
