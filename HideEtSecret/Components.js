import React from 'react';
import { Text, View } from 'react-native';


export class NameChannge extends React.Component {
    render (){
      return (
              <Text>Welcome {this.props.name}!!!</Text>
      );
    }
  }

  class StateTest extends React.Component{
      componentDidMount(){
          setInterval( () => this.setState( existingState => ({currentText: !existingState.currentText}) ), 1000);
      }

      state = {currentText: true}
      render () {
            if (!this.state.currentText){
                return null;
            }
          return (
            <Text>State is: {this.props.message}</Text>
          )
      }
  }

  export default StateTest;

//   export default NameChannge;