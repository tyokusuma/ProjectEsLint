/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native'

class AwesomeProject extends Component {
  constructor (props) {
    super(props)
    this.state = {showText: true}

    setInterval(() => {
      this.setState({showText: !this.state.showText})
    }, 3000)
  }

  render () {
    let display = this.state.showText ? this.props.Text : ''
    return (
      <Text>{display}</Text>
    )
  }
}

class Blink extends Component {
  render () {
    return (

      <View>
        <AwesomeProject/>
        <Text style={styles.welcome}>

        </Text>
        <AwesomeProject/>
        <Text style={styles.instructions}>
          Batch 1 Refactory
        </Text>
        <AwesomeProject/>
        <Text style={styles.instructions}>
        hajar saja
        </Text>

      </View>

    )
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  foto: {
    height: 250,
    width: 175,
    borderRadius: 10
  }
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)
