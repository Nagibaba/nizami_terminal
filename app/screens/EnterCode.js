'use strict';

import React, { Component } from 'react';

import BCard from '../components/BCard'

// remote components
import CodeInput from '../components/CodeInput';


// import KeyEvent from 'react-native-keyevent';

import {
  Text, 
  View,
  Image,
  TextInput
} from 'react-native';

//components
import BMovieCard from '../components/BMovieCard'
import BButton from '../components/BButton'

// config
import styles from '../config/styles'
import colors from '../config/colors'

class EnterCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Nagibaba',
    }
    this.onPress = this.onPress.bind(this)
  }

  componentDidMount(){
    // KeyEvent.onKeyUpListener((keyEvent) => {
    //       Alert.alert(keyEvent.keyCode+'')
    // })
  }

  onPress(){
    this.props.navigation.navigate('Error')
  }

  

  render() {
    return (
      <View style={[styles.container, styles.sidePadding]}>
        <View style={styles.row1}>
          <Text style={styles.enterCodeText}>
            Kodu daxil et
          </Text>
        </View>
        <View style={styles.row1}>
          <TextInput />
        </View>
        <View style={styles.row1AlignTop}>
          <BButton text='YOXLA' onPress={this.onPress} />
        </View>
        <View style={styles.row1}>
          <BButton text='SKAN ET' onPress={this.onPress} backgroundColor={colors.orange} color='#ffffff' width={180}/>
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

export default EnterCode