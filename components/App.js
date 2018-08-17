import React from 'react';
import ButtonComponent from './common/ButtonComponent'
import {  
  Text,
  View
} from 'react-native';
import {styles} from '../styles/appStyle'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/dispatcher';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      result:0,
      formula:"",
    }
    this.onPressOperatorOrNumber = this.onPressOperatorOrNumber.bind(this)
  }
  componentDidMount(){
  // this.props.loadData();
  }
  onPressOperatorOrNumber=(symbol)=>{
    if(symbol==="X"){
      symbol="*";
    }
    if(symbol === "÷"){
      symbol="/"
    }
    // this.setState({
    //   formula:this.state.formula+symbol
    // })
    this.props.inputNumber(symbol)

  }
  onPressSubmitResult=()=>{
    try{
      this.props.equalNumber(this.props.calcReducer.value)
    }catch(e){
      alert("Input wrong.")
    }
  }
  backspaceOperator=()=>{
    alert('Currently not available') 
  }
  onPressACButton=()=>{
    this.props.equalNumber(0)
  }
  render() {
    return (
      <View style={{flex:1}}>
          <View style={{backgroundColor:'#fafafa',height:130}}>
            <View style={{flex:1,justifyContent:'center'}}>
                { <Text style={[styles.resultText,{fontSize:(60-(this.props.calcReducer.value.toString().length))}]}>
                  {this.props.calcReducer.value}
                </Text> }
            </View>
          </View>
          <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end'}}>
            <View style={{flex:1,backgroundColor:'#fafafa', display:'none'}}>
              <View style={{flex:1,alignItems:'center',flexDirection:'row'}}>
                  <Text style={styles.formulaText}>
                    {this.props.calcReducer.value}
                  </Text>                  
              </View>
            </View>
            <View style={styles.row}>
            <ButtonComponent  style={styles.ACbutton} titleStyle ={styles.titleOperationStyle} onPress={this.onPressACButton} title="AC"/>
            <ButtonComponent  style={styles.ACbutton} titleStyle = {styles.titleOperationStyle} onPress={this.backspaceOperator} title="DEL"/>
            <ButtonComponent  style={styles.ACbutton} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="%"/>
            <ButtonComponent  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="÷"/>
            </View>
            <View style={styles.row}>
              <ButtonComponent  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="1"/>
              <ButtonComponent  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="2"/>
              <ButtonComponent  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="3"/>
              <ButtonComponent  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="X"/>
            </View>
            <View style={styles.row}>
              <ButtonComponent  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="4"/>
              <ButtonComponent  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="5"/>
              <ButtonComponent  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="6"/>
              <ButtonComponent  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="-"/>
            </View>
            <View style={styles.row}>
              <ButtonComponent  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="7"/>
              <ButtonComponent  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="8"/>
              <ButtonComponent  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="9"/>
              <ButtonComponent  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="+"/>
            </View>
            <View style={styles.row}>
              <ButtonComponent  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="0"/>
              <ButtonComponent  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="00"/>
              <ButtonComponent  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="."/>
              <ButtonComponent  style={styles.equalButton} titleStyle = {styles.titleOperationStyle} onPress={this.onPressSubmitResult} title="="/>
            </View>
          </View>
        </View>
    );
  }
}
function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
