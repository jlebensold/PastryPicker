// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

type Props = {
  isActive?: bool,
  label: string,
  onPress: (key: string) => void
}

export default class PastryButton extends Component<Props, void>{

  static defaultProps = {
    isActive: false
  }

  render() {
    const { isActive, onPress, label} = this.props
    return <View style={styles.buttonContainer}>
      <TouchableHighlight onPress={onPress} style={[styles.button, {
        backgroundColor: isActive ? "#CD7734" : "#54250B" } ]}
        underlayColor={"#CD7734"}>
        <Text style={styles.buttonText} >{label}</Text>
      </TouchableHighlight>
    </View>
  }

}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    minWidth: 140,
    justifyContent: 'center',
    backgroundColor: "#5A8282",
    borderRadius: 10,
  },
  buttonContainer: {
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
  },
});
