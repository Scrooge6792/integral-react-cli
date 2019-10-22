/*
* 全局状态
* */
import { observable } from 'mobx'
import { IService, ServiceStatic } from 'sora-react-service'
import { Service } from 'sora-react-service/lib'
import { IRootStore } from './types'

export interface IData extends IService {}
interface DataStatic extends ServiceStatic{
  new(store: IRootStore): IData;
}

class Data extends Service implements IData {
  ['constructor']: DataStatic
  constructor(protected storeApp: IRootStore) { super() }
}

export default Data as DataStatic
