import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import BText from '../BText'
import styles from './styles'

export default class TicketItem extends Component {
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
  	let indexWrapper, indexText, ticketText, icon
  	// switch(children.status){
  	// 	case 'readyToPrint':
  	// 		indexWrapper = {backgroundColor: '#000000'};
  	// 		break;

  	// 	default:


  	// }
    return (
    	<TouchableOpacity style={[styles.ticket]} onPress={this.onPress} >
			<View style={[styles.col1half, styles.alignCenter]}>
				<Text style={styles.ticketText}>
					{parseInt(this.props.index)+1}
				</Text>
			</View>
			<View style={[styles.col8, styles.middle, styles.ticketTextWrapper]}>
				<Text style={styles.ticketText	}>
					Sıra 6, Yer 14
				</Text>
			</View>
			<View style={[styles.col2, styles.alignCenter]}>
				<Image source={require('../../images/check.png')} style={{width: 24, height: 24}}/>
			</View>
	    </TouchableOpacity>
    )
  }
}