import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class History extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>History Content Here</Text>
      </View>
    );
  }
}

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

