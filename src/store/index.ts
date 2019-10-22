import _ from 'lodash'
import { IRootStore } from './types'
import App from './app';
import Data from './data';

export interface IStore {
  rootStore: IRootStore;
}

class Store implements IStore{
  constructor() {
    const base = { app: new App() } as IRootStore
    this.rootStore = _.assign(base, { data: new Data(base) })
  }

  public rootStore: IRootStore
}

export default Store
