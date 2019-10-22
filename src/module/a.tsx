import * as React from 'react'
import { observable, action, computed } from 'mobx'
import styled from 'styled-components'

interface PropsType {
}

class A extends React.Component<PropsType> {
  render() {
    return <div>A</div>
  }
}

export default A
