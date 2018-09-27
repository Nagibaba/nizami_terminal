import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import BText from '../BText'
import styles from './styles'

export default class BMovieCard extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.onPress = this.onPress.bind(this)
	}
	onPress(){
		// this.props.navigation.navigate('MovieInfo')
	}
  render() {
  	// const children = this.props.children
  	// const active = children.active?styles.active:null
    return (
	      <View style={[styles.movieCard]}>
	      	<View style={styles.row1}>
		      	<BText style={styles.header}>
		      		AYLA
		      	</BText>
		    </View>
		    <View style={[styles.row1, styles.tr]}>
		      	<View style={styles.col4}>
		      		<BText style={styles.text}>
			      		Kassadan alınan
			      	</BText>
		      	</View>
		      	<View style={[styles.col1, styles.alignRight]}>
					<BText style={styles.text}>
		      			60
		      		</BText>
		      	</View>
		    </View>
		    <View style={[styles.row1, styles.tr]}>
		      	<View style={styles.col4}>
		      		<BText style={styles.text}>
			      		Online 
			      	</BText>
		      	</View>
		      	<View style={[styles.col1, styles.alignRight]}>
					<BText style={styles.text}>
		      			46
		      		</BText>
		      	</View>
		    </View>
		    <View style={[styles.row1, styles.tr]}>
		      	<View style={styles.col4}>
		      		<BText style={styles.text}>
			      		Boş olan
			      	</BText>
		      	</View>
		      	<View style={[styles.col1, styles.alignRight]}>
					<BText style={styles.text}>
		      			12
		      		</BText>
		      	</View>
		    </View>
		    <View style={styles.row1}>
		      	
		    </View>
	      </View>
    )
  }
}