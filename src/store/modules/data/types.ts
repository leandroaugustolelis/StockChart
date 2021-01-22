import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type DataAction = ActionType<typeof actions>;

export interface DataState {
  readonly loadedStockInfo: boolean;
}
