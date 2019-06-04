import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Story extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Story Content Here</Text>
      </View>
    );
  }
}

export default Story;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

