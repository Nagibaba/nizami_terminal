import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

export default StyleSheet.create({
  inputContainer:{
    flexDirection: 'row', 
  },
  inputWrapper:{
    marginRight: 4,
    borderColor: 'gray', 
    borderWidth: 2, 
    borderColor: '#E5E5E5', 
    borderRadius: 5, 
    overflow: 'hidden'
  },
  input:{height: 42, 
    width: 36, 
    fontSize: 24, 
    color: '#ffffff', 
    backgroundColor: 'rgba(255, 255, 255, .15)' 
  },
});