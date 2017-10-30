import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const PASTRIES = {
  croissant:    { label: "🥐  Croissants",   flour: 0.7, butter: 0.5, sugar: 0.2, eggs: 0 },
  cookie:       { label: "🍪  Cookies",      flour: 0.5, butter: 0.4, sugar: 0.5, eggs: 0.2},
  pancake:      { label: "🥞  Pancakes",     flour: 0.7, butter: 0.5, sugar: 0.3, eggs: 0.3 },
  doughnut:     { label: "🍩  Dougnuts",     flour: 0.5, butter: 0.2, sugar: 0.8, eggs: 0.1 },
}

export default class PastryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPastry: 'croissant'
    }
  }

  setPastry = (selectedPastry) => {
    this.setState({ selectedPastry });
  }

  renderIngredient(backgroundColor, flex, label) {
    return <View  style={styles.ingredientColumn}>
      <View style={styles.bar} />
      <View style={{ backgroundColor, flex }} />
      <View style={styles.label}><Text>{label}</Text></View>
      </View>
  }

  render() {
    const { flour, butter, sugar, eggs } = PASTRIES[this.state.selectedPastry];
    return <View style={styles.pastryPicker}>
        <View style={styles.buttons}>
          {
            Object.keys(PASTRIES).map( (key) => <View key={key} style={styles.buttonContainer}>
              <TouchableHighlight
                style={[styles.button, {
                  backgroundColor: key === this.state.selectedPastry ? "#CD7734" : "#54250B" }
                ]} underlayColor={"#CD7734"} onPress={() => { this.setPastry(key) } }>
                <Text style={styles.buttonText} >{PASTRIES[key].label}</Text>
              </TouchableHighlight>
            </View>)
          }
        </View>
      <View style={styles.ingredientContainer}>
        {this.renderIngredient("#F2D8A6", flour, "Flour")}
        {this.renderIngredient("#FFC049", butter, "Butter")}
        {this.renderIngredient("#CACACA", sugar, "Sugar")}
        {this.renderIngredient("#FFDE59", eggs, "Eggs")}
      </View>
    </View>
  }
}


const styles = StyleSheet.create({
  pastryPicker: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
  },
  ingredientContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  ingredientColumn: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    margin: 10,
  },
  bar: {
    alignSelf: 'flex-start',
    flexGrow: 0,
  },
  button: {
    padding: 10,
    minWidth: 140,
    justifyContent: 'center',
    backgroundColor: "#5A8282",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
  },
  buttons: {
    flexDirection: 'column',
    flexWrap: "wrap",
    paddingRight: 20,
    paddingLeft: 20,
    flex: 0.3,
  },
  label: {
    flex: 0.2,
  },
});
