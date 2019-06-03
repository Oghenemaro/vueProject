import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import NameChannge from './Components';
import StateTest from './Components';


export default class App extends React.Component {

  constructor (props){
    super(props);
    this.state = {text: ' '};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text>Welcome To Disturtion</Text>
        </View>
        <View style={styles.container4}>
        <TextInput style={{width: 120, height:40}} placeholder="Enter Comments" onChangeText= { (text) => this.setState({text})} />
          <Text>{this.state.text}</Text>
          <Button title='Press' onPress={() => Alert.alert(this.state.text)}/>
        </View>
        <View style={styles.container3}>
          <StateTest message ="Uyoyo"/>
          <StateTest message ="Maro"/>
          <StateTest message ="Onokpise"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly'
  },
  container2: {
    flex: 1,
    backgroundColor: '#575757',
    height: 100,
    justifyContent: 'center'

  },
  container3: {
    flex: 1,
    backgroundColor: 'grey',
  },
  container4: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
