'use strict';

import React, { Component } from 'react';

//config
import buttons from '../config/buttons'

import BCard from '../components/BCard'

// remote components
import CodeInput from '../components/CodeInput';


import KeyEvent from 'react-native-keyevent';

import {
  View,
  Image,
  TextInput,
  InteractionManager,
  ActivityIndicator,
  NativeModules,
  Alert
} from 'react-native';

//components
import BMovieCard from '../components/BMovieCard'
import BButton from '../components/BButton'
import Text from '../components/Text'


// config
import styles from '../config/styles'
import colors from '../config/colors'

class EnterCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Nagibaba',
      confCode: '',
      isReady : false
    }
    this.onPress = this.onPress.bind(this)
    this.onPressScanBtn = this.onPressScanBtn.bind(this)
    this.getScanText = this.getScanText.bind(this)
    this.ToastExample = NativeModules.ToastExample
  }

  componentDidMount(){
    /*InteractionManager.runAfterInteractions(() => {
     // 2: Component is done animating
     // 3: Start fetching the team / or render the view
    // this.props.dispatchTeamFetchStart();
     this.setState({
       isReady: true
     })
   });*/

    KeyEvent.onKeyUpListener((keyEvent) => {
      
          switch(keyEvent.keyCode){
            case buttons.enter:
              this.onPress()
              break;

            case buttons.scan:
              // this.props.navigation.navigate('SessionContinues')
              this.onPressScanBtn()
              break;

            default:
          }

    })


  }

  componentWillUnmount() {
    // if you are listening to keyDown
    KeyEvent.removeKeyDownListener();
 
     // if you are listening to keyUp
    KeyEvent.removeKeyUpListener();
 
     // if you are listening to keyMultiple
    KeyEvent.removeKeyMultipleListener();
  }
  onPress(){
    this.props.navigation.navigate('Error')
    
  }
  onPressScanBtn(){
    // this.props.navigation.navigate('SessionContinues')
    this.ToastExample.scan(this.getScanText);
  }

  getScanText(confCode){
    this.setState({confCode})
  }
  

  render() {
    // if(!this.state.isReady){
    //   return (
    //         <View style={[{flex: 1}, styles.fullCenter]}>
    //           <ActivityIndicator size="large" color="#0000ff"/> 
    //         </View>
    //   )
    // }
    return (
      <View style={[styles.container, styles.sidePadding]}>
        <View style={styles.row1}>
          <Text style={styles.enterCodeText}>
            Kodu daxil et
          </Text>
        </View>
        <View style={styles.row1}>
          <View style={styles.codeInputWrapper}>
            <TextInput 
              style={styles.codeInput}
              onChangeText={(confCode) => this.setState({confCode})}
              ref={this.state.confCode}
              value={this.state.confCode}
              underlineColorAndroid='transparent'
              autoFocus={true}
              keyboardType = 'numeric'
            />

          </View>
        </View>
        <View style={styles.row1AlignTop}>
          <BButton text='YOXLA' onPress={this.onPress} />
        </View>
        <View style={styles.row1}>
          <BButton text='SKAN ET' onPress={this.onPressScanBtn} backgroundColor={colors.orange} color='#ffffff' width={180}/>
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