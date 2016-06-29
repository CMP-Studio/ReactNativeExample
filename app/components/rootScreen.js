
import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Counter from './counter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  newCounterButton: {
    backgroundColor: '#007aff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newCounterButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

const RootScreen = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.counterList}>
        {props.counters.map((object) => {
          return (
            <Counter
              key={object.uuid}
              count={object.count}
              addPressed={() => {
                props.actions.addToCounter(object.uuid);
              }}
              subPressed={() => {
                props.actions.subFromCounter(object.uuid);
              }}
              deletePressed={() => {
                props.actions.deleteCounter(object.uuid);
              }}
            />
          );
        })}
      </ScrollView>
      <TouchableOpacity
        style={styles.newCounterButton}
        onPress={props.actions.newCounter}
      >
        <View>
          <Text style={styles.newCounterButtonText}>
            New Counter
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

RootScreen.propTypes = {
  counters: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    addToCounter: PropTypes.func.isRequired,
    subFromCounter: PropTypes.func.isRequired,
    newCounter: PropTypes.func.isRequired,
    deleteCounter: PropTypes.func.isRequired,
  }).isRequired,
};

export default RootScreen;
