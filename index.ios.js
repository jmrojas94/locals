import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './app/App.js'

export default class locals extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('locals', () => locals)
