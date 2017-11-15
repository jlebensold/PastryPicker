import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import IngredientBar from './ingredientBar'
import PastryButton from './pastryButton'

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

  render() {
    const { flour, butter, sugar, eggs } = PASTRIES[this.state.selectedPastry];
    return <View style={styles.pastryPicker}>
        <View style={styles.buttons}>
          {
            Object.keys(PASTRIES).map( (key) => <PastryButton key={key}
                isActive={this.state.selectedPastry === key}
                onPress={() => { this.setPastry(key) } }
                label={PASTRIES[key].label} /> )
          }
        </View>
      <View style={styles.ingredientContainer}>
        <IngredientBar backgroundColor="#F2D8A6" flex={flour} label="Flour" />
        <IngredientBar backgroundColor="#FFC049" flex={butter} label="Butter" />
        <IngredientBar backgroundColor="#CACACA" flex={sugar} label="Sugar" />
        <IngredientBar backgroundColor="#FFDE59" flex={eggs} label="Eggs" />
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
  buttons: {
    flexDirection: 'column',
    flexWrap: "wrap",
    paddingRight: 20,
    paddingLeft: 20,
    flex: 0.3,
  },
});
