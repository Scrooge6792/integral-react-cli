/*
* 设备信息、环境等内容
* */
import { IService, ServiceStatic } from 'sora-react-service'
import { Service } from 'sora-react-service/lib'

type Agent = 'wechat' | 'app' | 'browser'
type Env = 'dev' | 'prod'
type Device = 'mobile' | 'pc'

export interface IApp extends IService {
  readonly agent: Agent;
  readonly env: Env;
  readonly device: Device;
}

interface AppStatic extends ServiceStatic{
  new(): IApp;
}

function getAgent(): Agent {
  const agent = navigator.userAgent.toLowerCase()
  if (/micromessenger/.test(agent)) {
    return 'wechat'
  }
  if (/jifenapp/.test(agent) || /kafenapp/.test(agent)) {
    return 'app'
  }
  return 'browser'
}
function getEnv(): Env {
  return [
    'jdev.bhsgd.net',
    'localhost',
    '127.0.0.1',
  ].includes(window.location.hostname) ? 'dev' : 'prod'
}
function getDevice(): Device {
  return /(iphone|android)/.test(navigator.userAgent.toLowerCase()) ? 'mobile' : 'pc'
}

const App: AppStatic = class App extends Service implements IApp {
  ['constructor']: AppStatic

  public agent = getAgent()
  public env = getEnv()
  public device = getDevice()
}

export default App
