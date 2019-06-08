import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NfcManager from 'react-native-nfc-manager';


class Welcome extends Component {
    constructor(props){
      super(props);
      this.state = { status: 'not checked'};
    }
    componentDidMount(){
      NfcManager.isSupported().then( supported => {
        if( supported){
          this.setState({status: 'Device Supported'});
        }
      })
    }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Let's Begin>>>>>" onPress = {() => this.props.navigation.navigate('Dashboard')} />
        <Text>{this.state.status}</Text>
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

