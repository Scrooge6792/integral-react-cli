import * as React from 'react'
import Loadable from 'react-loadable'
import { ES6Module } from 'sora-react-service'
import Loading from '../module/common/loading'
import NotFound from '../module/common/404'

export function commonLoadable(loader): React.ComponentType & LoadableExport.LoadableComponent {
  return Loadable({
    loader,
    loading: Loading,
  })
}

export function validateImport(dir: string | null): Promise<ES6Module> {
  return dir ? import(`../module${dir}.tsx`) : Promise.resolve({
    __esModule: true,
    default: NotFound,
  })
}
