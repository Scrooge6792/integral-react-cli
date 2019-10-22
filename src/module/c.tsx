import * as React from 'react'
import { observable, action, computed } from 'mobx'
import styled from 'styled-components'

interface PropsType {
}

class C extends React.Component<PropsType> {
  render() {
    return <div>C</div>
  }
}

export default C
