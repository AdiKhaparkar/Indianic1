import React, {Component} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
      return(
          <View style={{flex: 1,alignItems:'center',paddingHorizontal:10}}>
              <Text style={styles.Register}>Register Form </Text>
              <TextInput placeholder="Full Name" style={styles.placeholder}>Full Name</TextInput>
              <TextInput placeholder="Email" style={styles.placeholder}>Email</TextInput>
              <TextInput placeholder="Mobile Number" style={styles.placeholder}>Mobile Number</TextInput>
              <TextInput placeholder="Password" style={styles.placeholder}>Password</TextInput>
              <Button title="Register" style={{textAlign:center}}>Register</Button>
          </View>
      )
  }
}
const styles = StyleSheet.create({
    placeholder:{margin:12, width:350 ,borderRadius:5, borderWidth:2 ,height:35 ,borderRadius:5,  textAlign:"center"},
    Register:{textAlign:"center",fontSize:25, color:"black"}
})
export default  Register;