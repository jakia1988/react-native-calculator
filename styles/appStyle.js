import {
    StyleSheet
  } from 'react-native';
export const styles =StyleSheet.create({
    component:{
      flex:1,
      flexDirection:'column'
    },
    ACbutton:{
      flex:1,
      backgroundColor:'#1e2326',
      height:75
    },
    buttonNumber:{
      flex:1,
      height:75,
      backgroundColor:'#1e2326'
    },
    operation:{
      backgroundColor:'#5e4bb6',
      height:75,
      flex:1,
    },
    textButton:{
      color:'white'    
    },
    formulaText:{
      flex:1,
      color:'#1e2326',
      textAlign :'right',
      fontSize:30,
      marginRight:16
    },
    iconStyle:{
      color:'#1e2326',
      marginLeft:16,
    },
    resultText:{
      color:'#1e2326',
      textAlign :'right',
      fontSize:60,
      marginRight:16
    },
    titleOperationStyle:{
      color:'white',
    },
    row:{
      flexDirection:'row',
      justifyContent: 'space-around'
    },
    equalButton:{
      backgroundColor:'#fec208',
      flex:1,
      height:75,
    }
  })