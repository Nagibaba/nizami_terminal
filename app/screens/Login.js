'use strict';

import React, { Component } from 'react';

import {
  Text, 
  View,
  Picker,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BText from '../components/BText'
import BButton from '../components/BButton'
import styles from '../config/styles'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Login extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      username: 'Nagibaba'
    }

    this.onPress = this.onPress.bind(this)
  }

  onPress(){
    this.props.navigation.navigate('Sessions')
  }

  render() {
    return (
      <View style={[styles.container, styles.loginWrapper]}>
        <View style={styles.row2} >
            <Image 
                source={require('../images/logo-nizami-copy.png')}
                style={{width: width/2, height: 50, resizeMode: 'contain'}} />
        </View>
        <View style={styles.row1} >
          <View style={styles.inputRow} > 
            <Image 
                source={require('../images/person_outline.png')}
                style={styles.icon} />   
            <Picker

              showIcon={true}
              style={styles.input}
              itemStyle={styles.pickerItem}
              selectedValue={this.state.username}
              onValueChange={itemValue => this.setState({ username: itemValue })}>
              <Picker.Item label="Nagibaba" value="nagibaba" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="Python" value="python" />
              <Picker.Item label="Haxe" value="haxe" />
            </Picker>
            <Image 
              source={require('../images/arrow_drop_down.png')}
              style={[styles.icon, styles.iconDropdown]} />
          </View>
        </View>

        <View style={[styles.row1]} >
          <View style={styles.inputRow}> 
            <Image 
                source={require('../images/lock_outline.png')}
                style={styles.icon} 
            />
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              underlineColorAndroid='transparent'
            />
          </View>
        </View>
        <View style={[styles.row2, styles.alignEnd]} >
          <BButton text='DAXİL OL' onPress={this.onPress}/>
        </View>
        <View style={styles.row1} >
          <View style={styles.shadow}>
            <Image 
                source={require('../images/Nova-logo-clear-manchester.png')}
            
            style={{width: 50, height: 20, resizeMode: 'contain'}} />
          </View>
        </View>
      </View>
    );
  }
}

export default Login