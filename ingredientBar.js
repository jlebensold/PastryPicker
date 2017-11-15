import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import PropTypes from 'prop-types'

class IngredientBar extends Component {

  render() {
    const { backgroundColor, flex, label } = this.props;
    return <View style={styles.ingredientColumn}>
      <View style={styles.bar} />
      <View style={{ backgroundColor, flex }} />
      <View style={styles.label}><Text>{label}</Text></View>
    </View>
  }

}

IngredientBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  flex: PropTypes.number.isRequired,
}

export default IngredientBar;

const styles = StyleSheet.create({
  ingredientColumn: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
  },
  bar: {
    alignSelf: 'flex-start',
    flexGrow: 0,
  },
  label: {
    flex: 0.2,
  },
});
