import _ from 'lodash'
import { IRoute, ES6Module } from 'sora-react-service'

const requireFunction = require.context('./path', true, /\.ts$/)
const collection: IRoute[] = requireFunction.keys().map(file => (<ES6Module<IRoute>>requireFunction(file)).default)

if (process.env.NODE_ENV === 'development') {
  // 检查各模块路由命名是否有重复
  const alias = collection.map(moduleName => Object.keys(moduleName)).flat()
  const aliasAfterFilter = [...new Set(alias)]
  const repeatCollection = aliasAfterFilter.reduce(
    (rawString, name) => rawString.replace(new RegExp(`"${name}",?`), ''),
    JSON.stringify(alias),
  )
  if (repeatCollection !== '[]') {
    console.table(JSON.parse(repeatCollection))
    throw new Error('检测到模块重名，请使用独一无二的key')
  }
}

export const pathsMap = _.mergeWith({}, ...collection, (p, target) => target.path)
const routes: IRoute[] = _.flatMap<IRoute[], IRoute>(collection, m => _.values(m))

export default routes
