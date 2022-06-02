import React, {Component} from 'react';
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.View}>
        <Image
          source={require('./AssetImage/market.jpeg')}
          style={styles.image}
        />
        <View>
          <Text style={styles.Email}>Email</Text>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.iconmsg}
                source={require('./AssetImage/msg.jpeg')}
              />
              <TextInput
                placeholder="Eg:- 1234@gmail.com"
                style={styles.placeholder}
              />
            </View>
          </View>
        </View>
        {/* //Password section */}
        <View>
          <Text style={styles.Email}>Password</Text>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.iconpass}
                source={require('./AssetImage/key.png')}
              />
              <TextInput
                placeholder="Enter Password"
                keyboardType="numeric"
                style={styles.placeholderpass}
              />
              <Image
                style={styles.passwordeye}
                source={require('./AssetImage/passwordeye.jpeg')}
              />
            </View>
          </View>
        </View>

        <Text style={styles.forgotpassword}>Forgot Password?</Text>
        {/*Login Button*/}
        <View style={styles.Login}>
          <Button title="Login" />
        </View>
        {/*  OR Image  */}
        <Text style={styles.or}>
          <Image source={require('./AssetImage/or.jpeg')} />
        </Text>

        {/*Continue With*/}
        <Text style={styles.continuewith}>Continue with</Text>

        {/* Buttons */}
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

        {/* Last Line */}
        <View style={{flexDirection: 'row'}}>
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
    height: 40,
  },
  image: {
    width: 290,
    height: 80,
  },
  button: {
    width: 120,
    height: 40,
  },
  placeholder: {
    marginTop: 10,
    width: 330,
    borderWidth: 2,
    height: 35,
    marginRight: 25,
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    alignContent: 'center',
  },
  placeholderpass: {
    alignContent: 'center',
    marginTop: 10,
    width: 330,
    borderWidth: 2,
    height: 35,
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
  },
  continuewith: {
    fontSize: 20,
    borderRadius: 5,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  Email: {
    marginLeft: 16,
    marginTop: 20,
  },
  View: {
    alignItems: 'center',
    paddingTop: 120,
  },
  or: {
    textAlign: 'center',
    paddingBottom: 50,
    width: 350,
    height: 95,
  },
  iconmsg: {
    height: 15,
    width: 20,
    marginTop: 25,
  },
  iconpass: {
    height: 15,
    width: 15,
    marginTop: 20,
  },
  forgotpassword: {
    color: 'green',
    marginTop: 20,
  },
  passwordeye: {
    marginRight: 5,
    height: 15,
    width: 20,
    marginTop: 25,
  },
  bottomline: {
    marginTop: 20,
  },
  bottomlineGreen: {
    marginTop: 20,
    color: 'green',
  },
});

export default App;
