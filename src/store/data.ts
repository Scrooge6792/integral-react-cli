/*
* 全局状态
* */
import { observable } from 'mobx'
import { IService, ServiceStatic } from 'sora-react-service'
import { Service } from 'sora-react-service/lib'
import { IRootStore } from './types'

export interface IData extends IService {
  login: boolean;
}
interface DataStatic extends ServiceStatic{
  new(store: IRootStore): IData;
}

class Data extends Service implements IData {
  ['constructor']: DataStatic
  constructor(protected storeApp: IRootStore) { super() }

  @observable login = false
}

export default Data as DataStatic
