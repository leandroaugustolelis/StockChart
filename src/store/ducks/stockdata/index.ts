import { Reducer } from 'redux';
import { StockDataState, StockDataTypes } from './types';

const INITIAL_STATE: StockDataState = {
  dataTicker1: [],
  dataTicker2: [],
  dataTicker3: [],
  dataTicker: [],
  inputError: '',
};

const reducer: Reducer<StockDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StockDataTypes.LOAD_TICKER:
      return {
        ...state,
        dataTicker: action.payload,
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
