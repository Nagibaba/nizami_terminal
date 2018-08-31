import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles'
import colors from '../../config/colors'

const BButton = (props)=>{

	return (
	  <View style={styles.shadow}>
        <TouchableOpacity
         style={[styles.button, {backgroundColor: props.backgroundColor, width: props.width}]}
         onPress={props.onPress}
        >
         <Text style={[styles.text, {color: props.color}]}> {props.text} </Text>
        </TouchableOpacity>
      </View>
	)
}
BButton.defaultProps = {
  backgroundColor: colors.white,
  color: colors.darkBlue(),
  width: 155
}
export default BButton