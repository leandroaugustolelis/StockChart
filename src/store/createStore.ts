import { applyMiddleware, createStore, Middleware, Reducer } from 'redux';

import { DataAction, DataState } from './modules/data/types';

export interface StoreState {
  data: DataState;
}

export type StoreAction = DataAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
