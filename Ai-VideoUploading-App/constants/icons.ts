import { ImageSourcePropType } from 'react-native';

interface Icons {
  [key: string]: ImageSourcePropType;
}

export const icons: Icons = {
  home: require('../assets/icons/home.png'),
  bookmark: require('../assets/icons/bookmark.png'),
  plus: require('../assets/icons/plus.png'),
  profile: require('../assets/icons/profile.png'),
  leftArrow: require('../assets/icons/left-arrow.png'),
  menu: require('../assets/icons/menu.png'),
  search: require('../assets/icons/search.png'),
  upload: require('../assets/icons/upload.png'),
  rightArrow: require('../assets/icons/right-arrow.png'),
  logout: require('../assets/icons/logout.png'),
  eyeHide: require('../assets/icons/eye-hide.png'),
  eye: require('../assets/icons/eye.png'),
  play: require('../assets/icons/play.png')
};

