import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from '../Text'
import GText from '../GText'
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
    	<View style={styles.wrapper}>
	      <View style={[styles.card, active]}>
	      	<View style={styles.col3}>
	      		<View style={styles.row3}>
	      			<GText style={[styles.title, {fontFamily: 'ArialNU'}]}>
	      				{children.title}

	      			</GText>
	      		</View>
	      		<View style={styles.row1}>
	      			<GText style={styles.lang}>
	      				Dil: {children.lang}
	      			</GText>
	      		</View>
	      		
	      	</View>
	      	<View style={styles.col1}>
	      		<View style={styles.row1} >
		      		<GText style={styles.date}>
		      			{children.date}
		      		</GText>
		      	</View>
		      	<View style={[styles.row2, styles.alignCenter]} >
		      		<GText style={styles.hour}>
		      			{children.hour}
		      		</GText>
		      	</View>
		      	<View style={[styles.row1, styles.alignEnd]} >
		      		<GText style={styles.hall}>
		      			{children.hall}
		      		</GText>
		      	</View>
	      	</View>
	      </View>

	      <View style={[styles.card, active]}>
	      	<View style={styles.col3}>
	      		<View style={styles.row1}>
	      			<Text style={styles.name}>
	      				{children.name}

	      			</Text>
	      		</View>
	      		<View style={styles.row1}>
	      			<Text style={styles.lang}>
	      				{children.mobile}
	      			</Text>
	      		</View>
	      		<View style={styles.row1}>
	      			<Text style={styles.lang}>
	      				{children.email}
	      			</Text>
	      		</View>
	      	</View>
	      	<View style={styles.ticketWrapper}>
	      		<View style={[styles.row1, styles.stickCBottom]} >
		      		
		      		<View style={styles.ticket}>
		      			<Text style={styles.ticketText}>
		      				BİLET
		      			</Text>
		      			<Text style={styles.ticketCount}>
		      				{children.ticketCount}
		      			</Text>
		      		</View>
		      	
		      	</View>
	      	</View>
	      </View>

	    </View>
    )
  }
}