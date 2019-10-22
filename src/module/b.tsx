import * as React from 'react'
import { observable, action, computed } from 'mobx'
import styled from 'styled-components'

interface PropsType {
}

class B extends React.Component<PropsType> {
  render() {
    return <div>B</div>
  }
}

export default B
