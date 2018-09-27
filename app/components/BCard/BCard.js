import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import BText from '../BText'
import styles from './styles'

export default class BCard extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.onPress = this.onPress.bind(this)
	}
	onPress(){
		this.props.navigation.navigate('MovieInfo')
	}
  render() {
  	const children = this.props.children
  	const active = children.active?styles.active:null
    return (
    	<TouchableOpacity  onPress={this.onPress} >
	      <View style={[styles.card, active]}>
	      	<View style={styles.col3}>
	      		<View style={styles.row3}>
	      			<BText style={styles.title}>
	      				{children.title}

	      			</BText>
	      		</View>
	      		<View style={styles.row1}>
	      			<BText style={styles.lang}>
	      				Dil: {children.lang}
	      			</BText>
	      		</View>
	      		
	      	</View>
	      	<View style={styles.col1}>
	      		<View style={styles.row1} >
		      		<BText style={styles.date}>
		      			{children.date}
		      		</BText>
		      	</View>
		      	<View style={[styles.row2, styles.alignCenter]} >
		      		<BText style={styles.hour}>
		      			{children.hour}
		      		</BText>
		      	</View>
		      	<View style={[styles.row1, styles.alignEnd]} >
		      		<BText style={styles.hall}>
		      			{children.hall}
		      		</BText>
		      	</View>
	      	</View>
	      </View>
	    </TouchableOpacity>
    )
  }
}