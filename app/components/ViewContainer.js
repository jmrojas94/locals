import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native'

export default class ViewContainer extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
})
