import { Reducer } from 'redux';
import { StockDataState, StockDataTypes } from './types';

const INITIAL_STATE: StockDataState = {
  dataTickerC1: [],
  dataTickerC2: [],
  dataTickerC3: [],
  inputError: '',
};

const reducer: Reducer<StockDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StockDataTypes.LOAD_TICKER:
      return {
        ...state,
        dataTickerC1: action.payload[0].data,
        dataTickerC2: action.payload[1].data,
        dataTickerC3: action.payload[2].data,
      };
    case StockDataTypes.SET_ERROR:
      return {
        ...state,
        inputError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
