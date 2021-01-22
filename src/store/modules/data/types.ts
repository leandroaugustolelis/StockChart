import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type DataAction = ActionType<typeof actions>;

interface TipoProps {
  name: string;
  value: number;
  unit: string;
}

export interface DataState {
  readonly loadedStockInfo: boolean;
  readonly macaco: Array<TipoProps>;
}
