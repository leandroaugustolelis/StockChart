//
// eslint-disable-next-line no-shadow
export enum StockDataTypes {
  UX_VALIDATION = '@general/UI_VALIDATE',
  LOAD_DATAC1 = '@data/LOAD_DATAC1',
  LOAD_DATAC2 = '@data/LOAD_DATAC2',
  LOAD_DATAC3 = '@data/LOAD_DATAC3',
}

export interface StockData {
  symbol: string;
  companyName: string;
  latestPrice: number;
  change: string;
}

export interface StockDataState {
  readonly datac1: StockData[];
  readonly datac2: StockData[];
  readonly datac3: StockData[];
  readonly isFilled: boolean;
}
