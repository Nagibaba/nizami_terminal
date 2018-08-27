/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
View,
YellowBox
} from 'react-native';
import colors from './config/colors'
import Routes from './config/Routes'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

// import ScaledImage from './components/ScaledImage'

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {

    }

  }

  

  render() {
    return <Routes />;
  }
}


