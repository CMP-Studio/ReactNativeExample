
import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    flex: 0.8,
    textAlign: 'center',
  },
  spacer: {
    flex: 0.1,
  },
  horizontalContainer: {
    height: 40,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  addSign: {
    borderWidth: 1,
    width: 30,
    height: 30,
    textAlign: 'center',
    borderRadius: 15 / 2,
    borderColor: '#CCCCCC',
    fontSize: 22,
    fontWeight: 'bold',
  },
  deleteCounterText: {
    color: '#ff0000',
  },
});

const Counter = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.subPressed}
      >
        <View>
          <Text style={styles.addSign}>
            -
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.welcome}>
        {props.count}
      </Text>
      <TouchableOpacity
        onPress={props.addPressed}
      >
        <View>
          <Text style={styles.addSign}>
            +
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.deletePressed}
      >
        <View>
          <Text style={styles.deleteCounterText}>
            DELETE THIS COUNTER
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addPressed: PropTypes.func.isRequired,
  subPressed: PropTypes.func.isRequired,
  deletePressed: PropTypes.func.isRequired,
};

export default Counter;
