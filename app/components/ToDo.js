import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Platform } from 'react-native';

class ToDo extends Component {
  render() {
    let {counter} = this.props
    return (
      <View>
        <Text>
          {counter}
        </Text>
      </View>
    )
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    counter2: state.counter2
  }
  
}

let mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: bindActionCreators(increaseCounter, dispatch),
  }
}

let styles = StyleSheet({
  container: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'red', 
    width: '100%', 
    height: '100%' },
  text: { 
    fontSize: 25, 
    color: '#fff' }
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);