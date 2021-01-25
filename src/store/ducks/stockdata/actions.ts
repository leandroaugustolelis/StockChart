import { action } from 'typesafe-actions';
import { StockData, StockDataTypes } from './types';

export const setInputError = (inputError: string) =>
  action(StockDataTypes.SET_ERROR, inputError);

export const loadDataTicker = (
  dataTicker1: StockData[],
  dataTicker2: StockData[],
  dataTicker3: StockData[],
) => action(StockDataTypes.LOAD_TICKER, dataTicker1, dataTicker2, dataTicker3);
