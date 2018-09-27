import React, { Component } from 'react';
import { 
	TouchableOpacity, 
	Image, 
	View, 
	Text,
	Animated,
  	Easing,
	Alert 
} from 'react-native';

import {
  createStackNavigator,
  SafeAreaView,

} from 'react-navigation';

//screens
import Login from '../screens/Login'
import Sessions from '../screens/Sessions'
import MovieInfo from '../screens/MovieInfo'
import EnterCode from '../screens/EnterCode'
import Error from '../screens/Error'
import SessionContinues from '../screens/SessionContinues'
import Ticket from '../screens/Ticket'

//config
import colors from './colors'

const headerRight = ( 
	<TouchableOpacity 
		onPress={()=>Alert.alert('Çıxış etdiniz')}
		style={{padding: 15}}>
  		<Image  source={require('../images/power_settings_new.png')} 
  				style={{width: 20, height: 20, resizeMode: 'contain'}}	/>
  	</TouchableOpacity>
)
const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { position, layout, scene, index, scenes } = sceneProps
      const toIndex = index
      const thisSceneIndex = scene.index
      const height = layout.initHeight
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0]
      })

      // Since we want the card to take the same amount of time 
      // to animate downwards no matter if it's 3rd on the stack 
      // or 53rd, we interpolate over the entire range 
      // from 0 - thisSceneIndex
      const translateY = position.interpolate({
        inputRange: [0, thisSceneIndex],
        outputRange: [height, 0]
      })

      const slideFromRight = { transform: [{ translateX }] }
      const slideFromBottom = { transform: [{ translateY }] }

      // Find the top screen on the stack
      const lastSceneIndex = scenes[scenes.length - 1].index

      // Test whether we're skipping back more than one screen
      if (lastSceneIndex - toIndex > 1) {
        // Do not transoform the screen being navigated to
        if (scene.index === toIndex) return
        return slideFromBottom
      }

      return slideFromRight
    },
  }
}
const Routes = createStackNavigator(
	{
	  Login: { 
	  	screen: Login,
	  	navigationOptions: {
	  		header: null
	  	}
	  },
	  Sessions: { 
	  	screen: Sessions,
	
	  	navigationOptions: {
	  		headerLeft: (<View/>),
	  		title: 'SEANSLAR',
	  	}
	  },

	  MovieInfo: { 
	  	screen: MovieInfo,
	
	  	navigationOptions:{
	  		title: '',
	  		headerTintColor:colors.darkBlue()

	  	}
	  },

	  EnterCode: { 
	  	screen: EnterCode,
	
	  	navigationOptions:{
	  		title: '',
	  		headerTintColor:colors.darkBlue()

	  	}
	  },
	  Error: { 
	  	screen: Error,
	
	  	navigationOptions:{
	  		title: '',
	  		headerTintColor:colors.darkBlue(),
	  		headerStyle: {
	  			display: 'none'
	  		},

	  	}
	  },
	  SessionContinues: { 
	  	screen: SessionContinues,
	
	  	navigationOptions:{
	  		title: '',
	  		headerTintColor:colors.darkBlue(),
	  		headerStyle: {
	  			display: 'none'
	  		},

	  	}
	  },

	  Ticket: { 
	  	screen: Ticket,
	
	  	navigationOptions:{
	  		headerLeft: (<View/>),
	  		title: 'BİLET',
	  		headerTintColor:colors.darkBlue()

	  	}
	  },
	  // Profile: { screen: ProfileScreen },
	},
	{
		initialRouteName: 'EnterCode',
		transitionConfig,
		// headerMode: 'none'
		// transitionConfig: () => ({
	 //      transitionSpec: {
	 //        duration: 300,
	 //        easing: Easing.out(Easing.poly(4)),
	 //        timing: Animated.timing,
	 //      },
	 //    })
	 	navigationOptions: {
	 	  headerStyle: {
	          elevation: 10, // remove shadow on Android
	          shadowOpacity: 1, // remove shadow on iOS
	          borderBottomWidth: 7,
	          borderBottomColor: colors.gray
	      },
	 	  headerTitleStyle: { alignSelf: 'center', flex: 1, textAlign: 'center', color: colors.darkBlue()},
	      headerRight: (headerRight),
	 	}
	}
);



export default Routes;