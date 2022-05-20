import React, {Component} from "react";
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native';
import Register from "./Register";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', paddingHorizontal:10}}>
        <Image source={require('./AssetImage/market.jpeg')}  style={styles.image}/>
        <Text style={styles.Login}>Login Form</Text>
        <TextInput placeholder="Eg:- 1234@gmail.com" style={styles.placeholder}>Email</TextInput>
        <TextInput placeholder=" Enter Password " style={styles.placeholder}>Password</TextInput>
        <Text style={{textAlign:"center"}}>Reset Password?</Text>
        <Text>{'\n'}</Text>
        {/* <Button title="Login"> </Button> */}
        <Text>{'\n'}</Text>
        <Text style={{textAlign:"center"}}>-----------------------------------------OR-----------------------------------------</Text>
        <Text style={styles.continuewith}>Continue with</Text>
        <Text>{'\n'}</Text>
        <View style={{flexDirection:'row'}}>
          <View style={{paddingRight:50}}>
            <Button title="Facebook" source={require('./AssetImage/facebook.svg')}/>
            

            {/* <FontAwesomeIcon icon="fa-thin fa-f"/> */}


          </View>
          <Button title="Google"/>
        </View>
        <Text>{'\n'}</Text>
        <Text>Dont have the account? Create Now</Text>
        {/* </Register> */}
        </View>
    )
  }
}
const styles = StyleSheet.create({
  Login:{textAlign:"center",fontSize:25, color:"black"},
  image:{width:150, height:150},
  placeholder:{margin:12, width:350 ,borderRadius:5, borderWidth:2 ,height:35 ,borderRadius:5},
  continuewith:{textAlign:"center", fontSize:20, backgroundColor:"grey", borderBottomColor:"maroon",borderBottomWidth:2, borderRadius:5}
})

export default App;