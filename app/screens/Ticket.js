'use strict';

import React, { Component } from 'react';

import BCard from '../components/BCard'

import {
  Text, 
  View,
  Image
} from 'react-native';

//components
import TicketTop from '../components/TicketTop'
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
    const movieInfo = {title: 'Enes Batur Hayal Mi Gerçek Mi?', lang: 'Türkçə', date: '22.02.18', hour: '14:00', hall: 'ZAL2', active: false}
    return (
      <View style={styles.container}>
        
        <View style={[styles.row3, styles.fullCenter]}>
            <TicketTop>
              {movieInfo}
            </TicketTop>
           <View style={[styles.row1, styles.fullCenter]}>
          
          </View>
        </View>

        <View style={[styles.row2, styles.fullCenter]}>
          
        </View>

        
      </View>
    );
  }
}

export default MovieInfo