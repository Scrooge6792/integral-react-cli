import '@babel/polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './src/app'

const baseName = `/${require('./config/default.json').publish.projectName}`

const render = Component => {
  ReactDOM.render(
    <BrowserRouter basename={baseName}>
      <Component />
    </BrowserRouter>,
    document.getElementById('app'),
  )
}

render(App)
