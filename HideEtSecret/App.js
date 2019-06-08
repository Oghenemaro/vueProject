import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

import  Home  from './screens/Home';
import  Clues  from './screens/Clues';
import Story  from './screens/Story';
import History from './screens/History';
import Welcome from './screens/Welcome';
import Dashboard from './screens/Dashboard';

// creates bottom tab menus with screen/components for each 
const TabNavigator = createBottomTabNavigator({
  Home: { screen: Home },
  Clues: { screen: Clues },
  Story: { screen: Story },
  History: { screen: History }
}, {
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
    }
  }
});


// adds a header for each screen 
const NavStack = createStackNavigator ({
  Dashboard: {screen: TabNavigator}
},{
  defaultNavigationOptions: ({navigation}) => {
    return { headerLeft: <Icon style={{padding: 10}} name="md-menu" size={30} onPress = {() => navigation.openDrawer()} /> };
  }
});

// adds a side menu container 
const DrawNavigator = createDrawerNavigator({
  Dashboard: {screen: NavStack}
});

// parent component 
const SwitchNavigator = createSwitchNavigator({
  Welcome: {screen: Welcome},
  Dashboard: {screen: DrawNavigator}
});

// creates a main container component for all menu components
const Navs = createAppContainer(SwitchNavigator);

class App extends React.Component {
  render() {
    return (
      <Navs style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontFamily: 'Times New Roman '
  },
});

export default App;

