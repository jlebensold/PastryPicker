import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import PropTypes from 'prop-types'

class PastryButton extends Component {

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

PastryButton.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

PastryButton.defaultProps = {
  isActive: false
};

export default PastryButton;

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
