import { createStore, Store } from 'redux';
import { StockDataState } from './ducks/stockdata/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  stockdata: StockDataState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
