import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles'

const BButton = (props)=>{

	return (
	  <View style={styles.shadow}>
        <TouchableOpacity
         style={[styles.button]}
         onPress={props.onPress}
        >
         <Text style={styles.text}> DAXİL OL </Text>
        </TouchableOpacity>
      </View>
	)
}

export default BButton