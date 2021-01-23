import { Reducer } from 'redux';
import { StockDataState, StockDataTypes } from './types';

const INITIAL_STATE: StockDataState = {
  data: [],
  loading: false,
};

const reducer: Reducer<StockDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StockDataTypes.LOAD_DATA:
      return {
        ...state,
        loading: true,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
