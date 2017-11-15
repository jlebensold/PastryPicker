// @flow
import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';


type Props = {
  backgroundColor: string,
  label: string,
  flex: number
}

export default class IngredientBar extends Component<Props>{

  render() {
    const { backgroundColor, flex, label } = this.props;
    return <View style={styles.ingredientColumn}>
      <View style={styles.bar} />
      <View style={{ backgroundColor, flex }} />
      <View style={styles.label}><Text>{label}</Text></View>
    </View>
  }

}

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
