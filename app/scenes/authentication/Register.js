import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native'

// Components
import ViewContainer from '../../components/ViewContainer.js'
import StatusbarBackground from '../../components/StatusbarBackground.js'

// Styles
import { styles } from './styles.js'

export default class Register extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusbarBackground/>

        <View style={styles.logo}>
          <Text>LOCALS</Text>
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            onChangeText={(text) => {this.setState({email: text})}}
            value={this.state.email}
            style={styles.textInput}
            placeholder='Email'
            returnKeyType='next'
          />
          <View style={styles.hairline}/>
          <TextInput
            onChangeText={(text) => {this.setState({password: text})}}
            value={this.state.password}
            style={styles.textInput}
            placeholder='Password'
            secureTextEntry={true}
            returnKeyType='go'
          />
          <View style={styles.hairline}/>
          <TextInput
            onChangeText={(text) => {this.setState({password: text})}}
            value={this.state.password}
            style={styles.textInput}
            placeholder='Password'
            secureTextEntry={true}
            returnKeyType='go'
          />
          <View style={styles.hairline}/>
        </View>

        <View style={styles.login}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>

      </ViewContainer>
    )
  }
}
