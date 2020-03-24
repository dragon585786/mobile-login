import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,

} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value1: '',
      value2: '',
      real:'',
    }
    this.handleChangeText = this.handleChangeText.bind(this)
    this.handleChangeText1 = this.handleChangeText1.bind(this)
    this.handleChangeText2 = this.handleChangeText2.bind(this)
    this.buttonn = this.buttonn.bind(this)
    this.realTime = this.realTime.bind(this)

  }
  buttonn(){
    // console.log(this._username, this._password);
    const username = this._username._lastNativeText
    const password = this._password._lastNativeText
    console.log(username,password)
    this.setState({
      value: 'Username: ' + username,
      value2: 'Password: ' + password,
    })
  }

  handleChangeText(e) {
    if(this.state.real == 'true'){
      this.setState({
        value: e
      });
    }
   
  }
  handleChangeText1(e) {
    if (e) {
      this.setState({
        value1: e
      });
    }

  } handleChangeText2(e) {
    if(this.state.real == 'true'){
      this.setState({
        value2: e
      });
    }
   
   

  }
  realTime() {
    if(this.state.real == 'true'){
      this.setState({
        real: 'false'
      });
      return 0;
    }
   
this.setState({
  real:'true'
})
console.log(this.state.real)
  }
  render() {
    return (<View style={styles.container}>
      <Button title='real time data' onPress={this.realTime}/>
      <Text style={styles.text}>Username</Text>
      <TextInput style={[styles.input, styles.inputContainer]}
        // defaultValue={this.state.value}
        onChangeText={this.handleChangeText}
        ref={input => this._username = input}
        placeholder={"Username"}
      />

      {/* <Text style={styles.text}>Email</Text>
      <TextInput style={[styles.input, styles.inputContainer]}
        defaultValue={this.state.value1}
        onChangeText={this.handleChangeText1}
        placeholder={"Email"}

      /> */}

      <Text style={styles.text}>Password</Text>
      <TextInput style={[styles.input, styles.inputContainer]}
        // defaultValue={this.state.value2}
        onChangeText={this.handleChangeText2}
        ref={input => this._password = input}

        placeholder={"Password"}

      />
      <Button title="login" onPress={this.buttonn} />

      <Text style={styles.text1}> {this.state.value}</Text>
      <Text style={styles.text1}>{this.state.value2}</Text>

      {/* you are write this {this.state.value} */}
      {/* <Text style={styles.text}>your username {this.state.value}</Text>
        <Text style={styles.text}>your Email {this.state.value}</Text>
        <Text style={styles.text}>your Password {this.state.value}</Text> */}


    </View>);
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    // alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row'
    padding: 20,
  },
  inputContainer: {
    // borderLeftWidth: 4,
    borderBottomWidth: 2,
    // color:'green',
    height: 60
  },
  input: {
    height: 70,
    backgroundColor: 'aqua',
    paddingLeft: 15,
    paddingRight: 15
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  text1: {
    color: 'white',
    fontSize: 30,
    // height:10,
    padding: 30,
  },

});

export default App;