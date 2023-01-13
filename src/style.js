import {
  StyleSheet,
  Dimensions,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#222',
  },
  layoutIndicator: {
    height: 15,
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  indicator: {
    margin: 3,
    opacity: 0.9
  },
  indicatorSelected: {
    opacity: 1,
  },
  containerImage: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: 'black',
  },
  layoutText: {
    position: 'absolute',
    paddingHorizontal: 15,
    bottom: 30,
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  textCaption: {
    fontWeight: '400',
    fontSize: 12,
    color: 'white',
  }
});

export const setIndicatorSize = (size) => {
  return {
    width: size,
    height: size,
    borderRadius: size / 2,
  };
};

export const setIndicatorColor = (color) => {
  return {
    backgroundColor: color,
  };
};

export const layoutArrow = function (imageHeight, iconHeight) {
  return {
    position: 'absolute',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    top: (imageHeight - iconHeight) / 2,
    bottom: (imageHeight - iconHeight) / 2,
  };
};

export const iconArrow = function (iconHeight) {
  return {
    width: 0,
    height: 0,
    margin: 5,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopWidth: iconHeight / 2,
    borderBottomWidth: iconHeight / 2,
  };
};

export const iconArrowRight = function (iconHeight) {
  return {
    borderRightWidth: 0,
    borderLeftWidth: iconHeight * 75 / 100,
    borderRightColor: 'transparent',
    borderLeftColor: 'white',
  };
};

export const iconArrowLeft = function (iconHeight) {
  return {
    borderRightWidth: iconHeight * 75 / 100,
    borderLeftWidth: 0,
    borderRightColor: 'white',
    borderLeftColor: 'transparent',
  };
};