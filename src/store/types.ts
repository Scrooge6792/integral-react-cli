import { IApp } from './app'
import { IData } from './data'

export interface IRootStore {
  app: IApp;
  data: IData;
}
