import _ from 'lodash'
import { ModuleRoute } from 'sora-react-service'

const requireFunction = require.context('./path', true, /\.ts$/)

const routes: ModuleRoute = _.flatten(requireFunction.keys().map<ModuleRoute>(file => requireFunction(file).default))

if (process.env.NODE_ENV === 'development') {
  /* 检查各模块路由命名是否有重复 */
  const repeatedNames = _.chain(routes).countBy(route => route.key).pickBy(times => times > 1).keys().value()
  if (repeatedNames.length) {
    console.table(repeatedNames)
    throw new Error('检测到模块重名')
  }
}

export const pathsMap = _.map(routes, route => route.path)

export default routes
