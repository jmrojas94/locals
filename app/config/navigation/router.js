import React from 'react'

// NPMs
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

// Components
import ViewContainer from '../../components/ViewContainer.js'

// Scenes
import Login from '../../scenes/authentication/Login.js'
import Register from '../../scenes/authentication/Register.js'
import Profile from '../../scenes/Profile.js'
import Discover from '../../scenes/Discover.js'

export const Stack = StackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  }
}, {
    headerMode: 'none'
  }
)

export const Tabs = TabNavigator({
  Discover: {
    screen: Discover
  },
  Login: {
    screen: Stack
  },
  Profile: {
    screen: Profile
  }
})
