import {StyleSheet} from 'react-native';
import {grayscale35, grayscale45} from '../../../../core/styles/global';

export default StyleSheet.create({
  list: {
    backgroundColor: grayscale35,
  },
  title: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 8,
    paddingTop: 8,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  titleText: {
    color: grayscale45
  }
});
