import * as React from 'react'
import Loadable from 'react-loadable'
import Loading from '@module/common/loading'
import NotFound from '@module/common/404'
import routes from '@router/paths';

function commonLoadable(loader): React.ComponentType & LoadableExport.LoadableComponent {
  return Loadable({
    loader,
    loading: Loading,
  })
}

// const modules: {
//   path: string;
//   component;
// }[] = routes.map(route => ({
//   path: route.path,
//   component: commonLoadable(() => (
//     typeof route.dir === 'function'
//       ? Promise.resolve(route.dir()).then(path => (path ? import(`../module/${path}`) : {
//         __esModule: true,
//         default: NotFound,
//       }))
//       : import(`../module/${route.dir}`)
//   )),
// }))
//
// export default modules
