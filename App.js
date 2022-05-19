import React, {Component} from "react";
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      
      <View style={{flex: 1, alignItems: 'center', paddingHorizontal:10}}>
        <Image source={require('./AssetImage/market.jpeg')}  style={{width:150, height:150}} />
        <Text style={styles.Login}>Login Form</Text>
        <TextInput placeholder="Eg:- 1234@gmail.com" style={styles.placeholder}>Email</TextInput>
        <TextInput placeholder=" Enter Password " style={styles.placeholder}>Password</TextInput>
        <Text style={{textAlign:"center"}}>Reset Password?</Text>
        <Text>{'\n'}</Text>
        <Button title="Login"> </Button>
        <Text>{'\n'}</Text>
        <Text style={{textAlign:"center"}}>-----------------------------------------OR-----------------------------------------</Text>
        <Text style={styles.continuewith}>Continue with</Text>
        <Text>{'\n'}</Text>
        <View style={{flexDirection:'row'}}>
          <View style={{paddingRight:50}}>
            <Button title="Facebook"/>
          </View>
          <Button title="Google"/>
        </View>
        <Text >Dont have the account?</Text>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  Login:{textAlign:"center",fontSize:25, color:"black"},
  placeholder:{margin:12, width:150 ,borderRadius:5, borderWidth:2 ,height:35 ,borderRadius:5},
  continuewith:{textAlign:"center", fontSize:20, backgroundColor:"grey", borderBottomColor:"maroon",borderBottomWidth:2, borderRadius:5}
})

export default App;