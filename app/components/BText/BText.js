import React, { Component } from 'react';
import Text from '../Text';
import styles from './styles'

const BText = (props)=>{
	return (
	  <Text style={[styles.text, props.style]}>
	    {props.children}
	  </Text>
	)
}

export default BText