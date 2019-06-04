import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Clues extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Clues Content Here</Text>
      </View>
    );
  }
}

export default Clues;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

