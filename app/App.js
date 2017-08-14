import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

// Components
import ViewContainer from './components/ViewContainer.js'
import StatusbarBackground from './components/StatusbarBackground.js'
import { Tabs } from './config/navigation/router.js'

export default class App extends Component {
  render() {
    return <Tabs />
  }
}
