'use strict';

import React, { Component } from 'react';

import BCard from '../components/BCard'

import {
  View,
  Image
} from 'react-native';

//components
import BMovieCard from '../components/BMovieCard'
import BButton from '../components/BButton'
import Text from '../components/Text'

// config
import styles from '../config/styles'
import colors from '../config/colors'

//modules 
import KeyEvent from 'react-native-keyevent';

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Nagibaba',
    }
    this.onPress = this.onPress.bind(this)
  }

  componentDidMount(){
    
    KeyEvent.onKeyUpListener((keyEvent) => {
          if(keyEvent.keyCode==66){
            // Ent
            this.onPress()
          }
    })
  }
  componentWillUnmount() {
    // if you are listening to keyDown
    // KeyEvent.removeKeyDownListener();
 
     // if you are listening to keyUp
    KeyEvent.removeKeyUpListener();
 
     // if you are listening to keyMultiple
    // KeyEvent.removeKeyMultipleListener();
  }
  onPress(){
    this.props.navigation.navigate('EnterCode')
  }

  render() {
    return (
      <View style={[styles.container, styles.sidePadding]}>
      	<BMovieCard />
        <View style={styles.row1}>
          <BButton text='DAVAM ET' onPress={this.onPress} />
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

export default MovieInfo