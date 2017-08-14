import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
  Button
} from 'react-native'

// Components
import ViewContainer from '../components/ViewContainer.js'
import StatusbarBackground from '../components/StatusbarBackground.js'

export default class Discover extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return(
      <ViewContainer>
        <StatusbarBackground/>

        <Text>
          Discover
        </Text>
      </ViewContainer>
    )
  }
}
