'use strict';

import React, { Component } from 'react';

import BCard from '../components/BCard'

import {
  View,
  ListView,
  // Dimensions,
  // Alert
} from 'react-native';

//components
import BText from '../components/BText'
import Text from '../components/Text'


//config
import styles from '../config/styles'
import colors from '../config/colors'

let scrollYPos = 0;

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
      // screenHeight: Dimensions.get('window').height,      
      // screenWidth: Dimensions.get('window').width,
    }
  }

  // componentDidMount(){
  //   this.scroller.scrollToEnd({animated: true})
  // }

  scrollToC = () => {
    scrollYPos = this.state.screenHeight * 2;
    // Alert.alert(scrollYPos+'')
    
  };

  render() {
    return (
      <View style={styles.container}>
      	<ListView
          ref={scroller=>this.scroller=scroller}
      		style={ styles.sessionList }
    			dataSource={this.state.dataSource}
    			renderRow={(rowData) => <BCard navigation={this.props.navigation}>{rowData}</BCard>}
    		/>
      </View>
    );
  }
}

export default Sessions