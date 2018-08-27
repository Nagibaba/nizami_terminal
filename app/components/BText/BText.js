import React, { Component } from 'react';
import { Text as TextRN } from 'react-native';
import styles from './styles'

const BText = (props)=>{
	return (
	  <TextRN style={[styles.text, props.style]}>
	    {props.children}
	  </TextRN>
	)
}

export default BText