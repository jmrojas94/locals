import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

// Components
import ViewContainer from './components/ViewContainer.js'
import StatusbarBackground from './components/StatusbarBackground.js'

// Scenes
import Login from './scenes/authentication/Login.js'
import Register from './scenes/authentication/Register.js'
import Profile from './scenes/Profile.js'

export default class App extends Component {
  render() {
    return (
      <Profile/>
    )
  }
}
