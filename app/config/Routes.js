import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, Alert  } from 'react-native';
import {
  createStackNavigator,
  SafeAreaView,
} from 'react-navigation';

//screens
import Login from '../screens/Login'
import Sessions from '../screens/Sessions'
import MovieInfo from '../screens/MovieInfo'
import EnterCode from '../screens/EnterCode'

//config
import colors from './colors'

const headerRight = ( 
	<TouchableOpacity 
		onPress={()=>Alert.alert('Çıxış etdiniz')}
		style={{marginRight: 15}}>
  		<Image  source={require('../images/power_settings_new.png')} 
  				style={{width: 20, height: 20, resizeMode: 'contain'}}	/>
  	</TouchableOpacity>
)

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
	  // Profile: { screen: ProfileScreen },
	},
	{
		initialRouteName: 'EnterCode',
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
	      },
	 	  headerTitleStyle: { alignSelf: 'center', flex: 1, textAlign: 'center', color: colors.darkBlue()},
	      
	      
	      headerRight: (headerRight),
	 	}
	}
);

export default Routes;