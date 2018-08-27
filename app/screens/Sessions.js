'use strict';

import React, { Component } from 'react';

import BCard from '../components/BCard'

import {
  Text, 
  View,
  ListView
} from 'react-native';
import BText from '../components/BText'
import styles from '../config/styles'
import colors from '../config/colors'

class Sessions extends Component {
	
	
	 
  constructor(props) {
    super(props);
  	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  	const moviesData = [
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
      dataSource: ds.cloneWithRows(moviesData),
    }
  }
  render() {
    return (
      <View style={styles.container}>
      	<ListView
      		style={ styles.sessionList }
			dataSource={this.state.dataSource}
			renderRow={(rowData) => <BCard navigation={this.props.navigation}>{rowData}</BCard>}
		/>
      </View>
    );
  }
}

export default Sessions