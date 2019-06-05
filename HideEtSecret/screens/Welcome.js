import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NfcManager from 'react-native-nfc-manager';

let message = '<<Not working at all>>';

const startNFCManager = async () =>
  NfcManager.start()
    .then(result => ({
      Success: `Sucesso ${result}`
    }))
    .catch(error => ({ Error: error }));

const checkStatus = startNFCManager;
if (checkStatus == 'success'){
   message = 'NFC manager working';
}else{
   message = 'Still not working';
}
// const nfcInfo = NfcManager.isEnabled();
// nfcInfo.then( () => result = 'Nfc Library Detected').catch(() => result = 'Promise not resolved');

// const cardDetection = NfcManager.registerTagEvent(card => {console.log('Test executed', card); return card});
// cardDetection.then( () => result = 'card found').catch(() => result = 'Promise unresolved');


class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Let's Begin>>>>>" onPress = {() => this.props.navigation.navigate('Dashboard')} />
        <Text>{message}</Text>
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

