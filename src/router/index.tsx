import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { observable, action, computed, reaction } from 'mobx'
import { observer, inject, disposeOnUnmount } from 'mobx-react'
import styled from 'styled-components'
import _ from 'lodash'
import { IRoute, ModuleRoute } from 'sora-react-service'
import { IStore } from '@src/store';
import { validateImport, commonLoadable } from './loadable-modules'
import NotFound from '../module/common/404';
import Welcome from '@module/welcome';

interface PropsType {
  store: IStore;
  routes: ModuleRoute<IStore>;
}

@observer
class RouteComponent extends React.PureComponent<PropsType> {
  @computed
  get routes() {
    return _.values(this.props.routes).map(route => {
      const { dir, ...rest } = route
      if (dir) {
        return {
          ...rest,
          component: commonLoadable(() => (typeof dir === 'function'
            ? Promise.resolve(dir(this.props.store)).then(validateImport)
            : validateImport(dir))),
        }
      }
      return rest
    })
  }

  render() {
    return (
      <Switch>
        {this.routes.map(route => (
          <Route exact {...route} />
        ))}
        <Route exact path='/' component={commonLoadable(() => validateImport('/welcome'))} />
        <NotFound />
      </Switch>
    )
  }
}

export default inject('store', 'routes')(RouteComponent) as React.ComponentType<{}>
