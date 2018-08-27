import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

export default StyleSheet.create({
  text: {
    color: colors.darkBlue(),
    fontSize: 20
  },
  shadow: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    // background color must be set
    backgroundColor : "#0000" // invisible color
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 40,
    width: 155

  

  },
});