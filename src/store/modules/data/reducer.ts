import { DataState, DataAction } from './types';

const INITIAL_STATE: DataState = {
  loadedStockInfo: false,
};

export default function data(
  state = INITIAL_STATE,
  action: DataAction,
): DataState {
  switch (action.type) {
    case '@data/LOAD_DATA':
      return {
        ...state,
        loadedStockInfo: true,
      };
    default:
      return state;
  }
}
