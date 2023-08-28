import {StyleSheet} from 'react-native';

export const AppColors = {
  blue: '#007BFF',
  grey: '#FAFAFA',
  teal: '#008080',
  mutedPurple: '#9370DB',
  lightBlue: '#BDEFFF',
  green: '#28a745',
  red: '#dc3545',
  buttonOrange: '#fd7e14',
};

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  container: {padding: 10},
  safeArea: {marginBottom: 130},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  responseBox: {
    borderWidth: 2,
    borderColor: AppColors.blue,
    padding: 5,
    borderRadius: 12,
    marginVertical: 10,
    minHeight: 140,
    marginHorizontal: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btn: {
    backgroundColor: AppColors.blue,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 12,
    margin: 7,
    alignItems: 'center',
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  smallButton: {
    backgroundColor: AppColors.buttonOrange,
    borderColor: AppColors.blue,
    padding: 3,
    paddingHorizontal: 7,
    borderWidth: 1,
    borderRadius: 4,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 3,
  },
  balanceText: {fontWeight: '900', fontSize: 25, color: AppColors.blue},
  boldText: {fontWeight: '700', fontSize: 15},
  greenText: {color: 'green'},

  modelContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textInput: {
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 12,
    marginVertical: 10,
    borderColor: AppColors.blue,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  channelListView: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10},
  channelIcon: {width: 25, height: 25},
  channelSideView: {width: '10%'},
  channelMainView: {width: '85%'},
  menuItem: {
    backgroundColor: AppColors.buttonOrange,
    borderColor: AppColors.blue,
    fontSize: 35,
    marginTop: -25,
    marginLeft: 4,
  },
  fullWidthBtn: {width: '100%'},
  closeButton: {backgroundColor: AppColors.buttonOrange, position: 'absolute', right: 10, top: 10},
  leftAlign: {alignSelf: 'flex-start'},

  boxRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: 1,
  },
  boldNormal: {fontWeight: '700', fontSize: 12},
  channelButton: {marginRight: 20, paddingHorizontal: 20},
});
