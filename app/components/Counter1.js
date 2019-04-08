import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, View, Text, Button } from 'react-native';
import {increaseCounter, multiplyCounter} from '../routines';
import {decreaseCounter} from '../routines';

class Counter1 extends Component {
  render() {
    let {counter1, increaseCounter, decreaseCounter, multiplyCounter} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {counter1}
        </Text>
        <Button title="+1" onPress={() => increaseCounter(500)}/>
        <Button title="-1" onPress={() => decreaseCounter(3000)}/>
        <Button title="x2" onPress={() => multiplyCounter(500)}/>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#fff', 
    width: '100%', 
    height: '100%' },
  text: { 
    fontSize: 25, 
    color: 'black' }
})

let mapStateToProps = (state) => {
  return {
    counter1: state.counter1
  }
  
}

let mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: bindActionCreators(increaseCounter, dispatch),
    decreaseCounter: bindActionCreators(decreaseCounter, dispatch),
    multiplyCounter: bindActionCreators(multiplyCounter, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter1);


