'use strict';

import React, { Component } from 'react';

import BCard from '../components/BCard'

import {
  Text, 
  View,
  Image
} from 'react-native';

//components
import BMovieCard from '../components/BMovieCard'
import BButton from '../components/BButton'

// config
import styles from '../config/styles'
import colors from '../config/colors'

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Nagibaba',
    }
    this.onPress = this.onPress.bind(this)
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