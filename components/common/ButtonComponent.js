import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    TouchableHighlight,
  } from 'react-native';
export default class ButtonComponent extends Component {
    constructor(props) {
        super(props);
    }
    
   onPress=()=>{
       const {onPress,title} = this.props;
       if (onPress) {
        onPress(title);
      }
   }  
  render() {
    return (
       <TouchableHighlight onPress={this.onPress} style={[styles.container,this.props.style]} underlayColor={this.props.underlayColor}>
        <Text style={[styles.title,this.props.titleStyle]}>
            {this.props.title}
        </Text>
      </TouchableHighlight>
    )
  }
}
const styles= StyleSheet.create({
    container:{
      alignItems:'center',
      justifyContent:'center'
    },
    title:{
      fontSize:25,
      color:'white'
    }
  })