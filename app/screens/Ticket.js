'use strict';

import React, { Component } from 'react';

import TicketItem from '../components/TicketItem'

import {
  View,
  Image,
  ListView,
  TouchableOpacity,
  Alert,
  NativeModules
} from 'react-native';

//components
import TicketTop from '../components/TicketTop'
import BButton from '../components/BButton'
import Text from '../components/Text'

// config
import styles from '../config/styles'
import colors from '../config/colors'


// //modules


class MovieInfo extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const ticketsData = [
      {title: 'Enes Batur Hayal Mi Gerçek Mi?', lang: 'Türkçə', date: '22.02.18', hour: '14:00', hall: 'ZAL2', active: false},
      {title: 'Ayla', lang: 'Türkçə', date: '22.02.18', hour: '14:00', hall: 'ZAL2', active: true},
      {title: 'Enes Batur Hayal Mi Gerçek Mi?', lang: 'Türkçə', date: '22.02.18', hour: '14:00', hall: 'ZAL2', active: false},
      {title: 'Ayla', lang: 'Türkçə', date: '22.02.18', hour: '14:00', hall: 'ZAL2', active: false},
      {title: 'Enes Batur Hayal Mi Gerçek Mi?', lang: 'Türkçə', date: '22.02.18', hour: '14:00', hall: 'ZAL2', active: false},
      {title: 'Enes Batur Hayal Mi Gerçek Mi?', lang: 'Türkçə', date: '22.02.18', hour: '14:00', hall: 'ZAL2', active: false},
      {title: 'Enes Batur Hayal Mi Gerçek Mi?', lang: 'Türkçə', date: '22.02.18', hour: '14:00', hall: 'ZAL2', active: false},

      ]
    this.state = {
      username: 'Nagibaba',
      dataSource: ds.cloneWithRows(ticketsData),
    }
    this.onPress = this.onPress.bind(this)
    this.ToastExample = NativeModules.ToastExample
    // console.log(JSON.stringify(ToastExample))
    
  }

  onPress(){
    // this.props.navigation.goBack()
    this.ToastExample.show('Awesome', this.ToastExample.SHORT);

  }

  render() {
    const movieInfo = {
      title: 'Enes Batur Hayal Mi Gerçek Mi?', 
      lang: 'Türkçə', 
      date: '22.02.18', 
      hour: '14:00', 
      hall: 'ZAL2', 
      active: false,
      name: 'Məmməd Məmmədov',
      mobile: '+994 50 123 45 67',
      email: 'mammad_mammadov@gmail.com',
      ticketCount: 3,
    }
    return (
      <View style={styles.container}>
        
        <View style={[styles.row3, styles.fullCenter]}>
            <TicketTop>
              {movieInfo}
            </TicketTop>
        </View>
        <TouchableOpacity onPress={this.onPress}>
          <Text>
            Test
          </Text>
        </TouchableOpacity>
        <View style={[styles.row3, styles.fullCenter, styles.ticketsWrapper]}>
          <ListView

            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionID, rowID) => <TicketItem  navigation={this.props.navigation} index={rowID}>{rowData}</TicketItem>}
          />
        </View>

        
      </View>
    );
  }
}

export default MovieInfo