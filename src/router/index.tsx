import * as React from 'react'
import { Route } from 'react-router-dom'
import { observable, action, computed } from 'mobx'
import styled from 'styled-components'
import _ from 'lodash'
import { IRoute } from 'sora-react-service';

interface PropsType {
  routes: IRoute[];
}

class Routes extends React.Component<PropsType> {
  @computed
  get routeData() {
    return _.partition(this.props.routes, route => route.always)
  }

  render() {
    return null
  }
}

export default Routes
