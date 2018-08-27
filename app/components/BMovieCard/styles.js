import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

export default StyleSheet.create({
  movieCard: {
    flex: 4,
    height: 90,
    flexDirection: 'column',
    marginTop: 30,
    marginBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 3,
    backgroundColor: 'white'
  },

  row1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  header:{
    fontSize: 18
  },
  text:{
    fontSize: 18
  },
  tr:{
    borderBottomWidth: 1,
    borderBottomColor: colors.darkBlue(.5),
    flexDirection: 'row',
  },
  col4:{
    flex: 4,
  },
  alignRight: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  col1:{
    flex: 1,
  },

});
