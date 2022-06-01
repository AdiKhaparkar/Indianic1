import React, {Component} from 'react';
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.View}>
        <Image source={require('./AssetImage/market.jpeg')}
          style={styles.image}/>
        <View >
          <Text style={styles.Email}>Email</Text>
          <View>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.icon} source={require("./AssetImage/msg.jpeg")}/>
            <TextInput placeholder="Eg:- 1234@gmail.com" style={styles.placeholder}/>
          </View>
          </View>
        </View>
        {/* //Password section */}
          <View>
            <Text  style={styles.Email}>Password</Text>
            <View>
            <View style={{flexDirection: 'row'}} >
            <Image style={styles.icon} source={require("./AssetImage/key.png")}/>
              <TextInput placeholder="Enter Password" style={styles.placeholder}/>
              <Image style={styles.passwordeye} source={require("./AssetImage/passwordeye.jpeg")}/>
            </View>
            </View>
          </View>

        <Text style={styles.forgotpassword}>Forgot Password?</Text>


        <View style={styles.Login}>
          <Button title="Login"/>
        </View>


        <Text style={styles.or}>
          <Image source={require('./AssetImage/or.jpeg')} />
        </Text>
        <Text style={styles.continuewith}>Continue with</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{paddingRight: 50}}>
            <Image
              source={require('./AssetImage/Facebook.png')}
              style={styles.button}
            />
          </View>
          <View>
            <Image
              source={require('./AssetImage/Google.png')}
              style={styles.button}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row'}} >
        <Text style={styles.bottomline}>Dont have the account?</Text>
        <Text style={styles.bottomlineGreen}>Create Now</Text>
        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  Login: {
    marginTop: 20,
    width: 150,
    height: 40
  },
  image: {width: 290, height: 80},
  button: {width: 120, height: 40},
  placeholder: {
    marginTop:10,
    width: 350,
    borderWidth: 2,
    height:35,
    borderRadius: 5,
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
  },
  continuewith: {
    fontSize: 20,
    borderRadius: 5,
    marginBottom:40,
    fontWeight:"bold"
  },
  Email: {
    marginLeft:20,
    marginTop:20
  },
  View: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 120,
    paddingHorizontal: 10,
  },
  or:{
    textAlign: 'center',
    paddingBottom: 50,
    width: 350,
    height: 95
  },
  icon:{
    height:15,
    width:20,
    marginTop:25,
  },
  forgotpassword:{
    color:"green",
    marginTop:20
  },
  bottomline:{
    marginTop:20
  },
  bottomlineGreen:{
    marginTop:20,
    color:"green"
  },
  passwordeye:{
    marginRight:5,
    height:15,
    width:20,
    marginTop:25,
  }
});

export default App;
