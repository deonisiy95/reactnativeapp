import {StyleSheet} from 'react-native';
import {grayscale100, grayscale35} from '../../../../core/styles/global';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 8,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  name: {
    fontSize: 20,
    color: grayscale100,
    width: 300
  },
  details: {
    marginTop: 0,
    color: grayscale35,
    fontSize: 16
  },
  switch: {}
});
