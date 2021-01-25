import { action } from 'typesafe-actions';
import { StockData, StockDataTypes } from './types';

export const setInputError = (inputError: string) =>
  action(StockDataTypes.SET_ERROR, inputError);

export const loadDataTicker = (dataTicker: []) =>
  action(StockDataTypes.LOAD_TICKER, dataTicker);
