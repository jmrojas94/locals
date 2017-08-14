import React, { Component } from 'react'
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'

// Components
import ViewContainer from '../components/ViewContainer.js'
import StatusbarBackground from '../components/StatusbarBackground.js'

export default class Profile extends Component {
  render() {
    return (
      <ViewContainer>
        <StatusbarBackground/>

        <View style={styles.profilePicture}>
          <View style={styles.profilePictureBorder}>
            <Image source={require('../assets/person.jpg')}/>
          </View>
        </View>

        <View style={styles.name}>
          <Text style={styles.nameText}>
            John Doe
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoText}>Guitar</Text>
          <Text style={styles.infoText}>Converge</Text>
          <Text style={styles.infoText}>Drunk</Text>
        </View>

        <View style={styles.background}>
          <View style={styles.columnOne}>
            <Text style={styles.backgroundText}>Guitar</Text>
            <Text style={styles.backgroundText}>Converge</Text>
            <Text style={styles.backgroundText}>Drunk</Text>
          </View>
          <View style={styles.columnTwo}>
            <Text style={styles.backgroundText}>Guitar</Text>
            <Text style={styles.backgroundText}>Converge</Text>
            <Text style={styles.backgroundText}>Drunk</Text>
          </View>
        </View>
      </ViewContainer>
    )
  }
}


const styles = StyleSheet.create({
  profilePicture: {
    marginTop: 80,
    alignItems: 'center'
  },
  profilePictureBorder: {
    borderWidth: 1,
    borderColor: 'black',
    height: 110,
    width: 110,
    borderRadius: 55,
    overflow: 'hidden'
  },
  name: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25
  },
  nameText: {
    fontSize: 24,
    color: 'black'
  },
  info: {
    alignItems: 'center',
    marginBottom: 100,
    paddingLeft: 40,
    paddingRight: 40
  },
  infoText: {
    fontSize: 12
  },
  background: {
    flex: 1,
    flexDirection: 'row'
  },
  backgroundText: {
    fontSize: 12,
    marginBottom: 20
  },
  columnOne: {
    flex:1,
    paddingLeft: 50,
    alignItems: 'center'
  },
  columnTwo: {
    flex:1,
    paddingRight: 50,
    alignItems: 'center'
  }
})
