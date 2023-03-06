import { Asset } from 'expo-asset'

// svg
import Logo from '../../assets/images/logo.svg'


export const svgs = {
  logo: Logo,
}

// png/jpeg
export const images = {
  logo_sm: require('../../assets/images/logo-sm.png'),
  logo_lg: require('../../assets/images/logo-lg.png'),
  bg_home: require('../../assets/images/background-home.png'),
  logo_home: require('../../assets/images/education.png')
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())
