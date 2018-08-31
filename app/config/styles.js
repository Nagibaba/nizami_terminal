import {StyleSheet} from 'react-native' 
import colors from './colors'
export default StyleSheet.create({
  testBg: {
    backgroundColor: '#000000'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.blue,
    
  },
  fullCenter:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginWrapper:{
    paddingLeft: 30,
    paddingRight: 30,
  },
  sidePadding:{
    paddingLeft: 13,
    paddingRight: 13,
  },
  row1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  row1AlignTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    
  },
  alignTop: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  inputRow:{
    flex: 1,
    flexDirection: 'row', 
    backgroundColor: colors.white,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',

  
  },
  row2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  row3: {
    flex: 3,
    flexDirection: 'row',
    
  },
  row4: {
    flex: 4,
    flexDirection: 'row',
    
  },
  input: {
    flex: 1,
    marginTop: 10,
    backgroundColor: colors.white,
    color: colors.darkBlue(),
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'flex-end' ,
    justifyContent: 'flex-end' ,
  },
  pickerItem: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
    borderRadius: 5,

  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 40,

  

  },
  alignEnd:{
    alignItems: 'flex-end',
  },
  icon: {
    width: 30, 
    height: 30, 
    resizeMode: 'contain',
    marginRight: 10,
    marginLeft: 10,
  },
  iconDropdown: {
    position: 'absolute', 
    right: 0
  },
  shadow: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    // background color must be set
    backgroundColor : "#0000" // invisible color
  },

  sessionList:{
    padding: 16,
  },

  enterCodeText:{
    fontSize: 20,
    color: '#ffffff',
    lineHeight: 24,
    letterSpacing: -20,
    alignSelf: 'flex-end',
  },
  itemsBottom:{
    
  },
  alertImg:{
    width: 155,
    height: 155,
  },
  alertText:{
    fontSize: 24,
    color: colors.white2,

  },
});

