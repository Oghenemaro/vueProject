import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Let's Begin>>>>>" onPress = {() => this.props.navigation.navigate('Dashboard')} />
      </View>
    );
  }
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

