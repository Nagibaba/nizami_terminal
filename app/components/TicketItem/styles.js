import { StyleSheet } from 'react-native'
import colors from '../../config/colors'
import {Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  ticket: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    // width: width,
    marginBottom: 10,
    borderRadius: 3,
    overflow: 'hidden' ,
    backgroundColor: 'white'
  },
  col1half:{
    flex: 1.5,
    backgroundColor: 'gray'
  },
  col2:{
    flex: 2,
    backgroundColor: 'gray'
  },
  col8:{
    flex: 8,
  },
  alignCenter:{
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  middle:{
    justifyContent: 'center',
  },
  ticketTextWrapper:{
    paddingLeft: 15
  },
  ticketText:{
    fontSize: 18,
    // marginLeft: 15,
  }

});