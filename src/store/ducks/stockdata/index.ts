import { Reducer } from 'redux';
import { StockDataState, StockDataTypes } from './types';

const INITIAL_STATE: StockDataState = {
  dataTicker1: [],
  dataTicker2: [],
  dataTicker3: [],
  inputError: '',
};

const reducer: Reducer<StockDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StockDataTypes.LOAD_TICKER:
      return {
        ...state,
        dataTicker1: action.payload[0].data,
        dataTicker2: action.payload[1].data,
        dataTicker3: action.payload[2].data,
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
