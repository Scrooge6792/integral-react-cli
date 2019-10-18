import * as React from 'react'
import { Provider } from 'mobx-react'
import { observable, action, computed } from 'mobx'
import styled from 'styled-components'

interface PropsType {
}

class Component extends React.Component<PropsType> {
  componentDidMount(): void {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', '/convertibility/exchange/get?v=2')
    xhr.send('{"data":{}}')
  }

  render() {
    return (
      <Provider></Provider>
    )
  }
}

export default Component
