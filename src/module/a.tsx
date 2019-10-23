import * as React from 'react'
import { Link } from 'react-router-dom'
import { observable, action, computed } from 'mobx'
import styled from 'styled-components'

interface PropsType {
}

class A extends React.Component<PropsType> {
  render() {
    return (
      <Link to='/b'>
        <div>to B</div>
      </Link>
    )
  }
}

export default A
