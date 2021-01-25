import { action } from 'typesafe-actions';
import { StockData, StockDataTypes } from './types';

export const setInputError = (inputError: string) =>
  action(StockDataTypes.SET_ERROR, inputError);

export const loadDataC1 = (dataTickerC1: StockData[]) =>
  action(StockDataTypes.LOAD_TICKER, dataTickerC1);
