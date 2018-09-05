import { StyleSheet } from 'react-native'
import colors from '../../config/colors'
import {Dimensions } from 'react-native'
const {width, height} = Dimensions.get('window')

export default StyleSheet.create({

  wrapper:{
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    
    padding: 10,
    borderRadius: 3,
    backgroundColor: 'white'
  },
  active: {
    backgroundColor: colors.gray,
  },
  col3:{
    flex: 3,
    flexDirection: 'column', 
    
  },
  col1:{
    flex: 1,
    alignItems: 'flex-end',
  },
  row3:{
    flex: 3,

  },
  row2:{
    flex: 2,

  },
  row1:{
    flex: 1,
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  name:{
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  lang:{
    fontSize: 16
  },
  date:{
    fontSize: 14
  },
  hour:{
    fontSize: 16,
    paddingTop: 0,
    paddingLeft: 1,
    paddingRight: 1,
    paddingBottom: 0,
    lineHeight: 19,
    textAlign: 'center', 
    textAlignVertical: 'center',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.green,

  },
  hall:{
    fontSize: 16,

  },
  alignEnd:{
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  alignCenter:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  ticket:{
    borderWidth: 2,
    borderRadius: 4,
    width: 43,
    height: 43,
    paddingBottom: 5,
    paddingTop: 5,
    alignSelf: 'center',
    borderColor: colors.thinGray,
  },
  ticketText: {
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 12
  },
  ticketCount: {
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 28
  },
  stickCBottom:{
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

});