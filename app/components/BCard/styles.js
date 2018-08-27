import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

export default StyleSheet.create({
  card: {
    flex: 1,
    height: 90,
    flexDirection: 'row',
    marginBottom: 10,
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
  	fontSize: 18
  },
  lang:{
  	fontSize: 16
  },
  date:{
  	fontSize: 14
  },
  hour:{
  	fontSize: 16,
  	paddingTop: 2,
  	paddingLeft: 2,
  	paddingRight: 2,
  	paddingBottom: 0,
  	textAlign: 'center', 
  	borderWidth: 2,
  	borderRadius: 5,
  	borderColor: colors.darkBlue(),

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

});