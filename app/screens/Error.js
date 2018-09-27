'use strict';

import React, { Component } from 'react';

import BCard from '../components/BCard'

import { 
  View,
  Image
} from 'react-native';
import KeyEvent from 'react-native-keyevent';

//components
import BMovieCard from '../components/BMovieCard'
import BButton from '../components/BButton'
import Text from '../components/Text'


// config
import styles from '../config/styles'
import colors from '../config/colors'
import buttons from '../config/buttons'

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
      
          switch(keyEvent.keyCode){
            case buttons.enter:
              this.onPress()
              break;

            case buttons.scan:
              this.props.navigation.navigate('SessionContinues')
              break;

            default:
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
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={[styles.container, styles.sidePadding]}>
        
        <View style={[styles.row3, styles.fullCenter]}>
          <Image source={require('../images/Group-3.png')} style={styles.alertImg}/>
        </View>

        <View style={[styles.row1, styles.alignTop]}>
          <Text style={[styles.alertText]}>
            Bilet yanlışdır
          </Text>
        </View>

        <View style={styles.row1}>
          <BButton text='GERİ QAYIT' onPress={this.onPress} />
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