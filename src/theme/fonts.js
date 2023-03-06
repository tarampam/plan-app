import * as Font from 'expo-font'

export const fonts = {
  openSan: {
    regular: 'openSans_regular',
    regularItalic: 'openSans_regular_italic',
    semiBold: 'openSans_semiBold',
    semiBoldItalic: 'openSans_semiBold_italic',
    bold: 'openSans_bold',
    boldItalic: 'openSans_bold_italic',
  },
  anton: {
    regular: 'anton_regular',
  },
  averiaSerfiLibre: {
    regular: 'averia_serfi_libre',
  },
  alfaSlabOne: {
    regular: 'alfa_slab_one',
  },
}

// fonts preloading
export const fontsAll = [
  {
    anton_regular: require('../../assets/fonts/Anton-Regular.ttf'),
  },
  {
    openSans_regular: require('../../assets/fonts/OpenSans-Regular.ttf'),
  },
  {
    openSans_regular_italic: require('../../assets/fonts/OpenSans-Italic.ttf'),
  },
  {
    openSans_semiBold: require('../../assets/fonts/OpenSans-Semibold.ttf'),
  },
  {
    openSans_semiBold_italic: require('../../assets/fonts/OpenSans-SemiboldItalic.ttf'),
  },
  {
    openSans_bold: require('../../assets/fonts/OpenSans-Bold.ttf'),
  },
  {
    openSans_bold_italic: require('../../assets/fonts/OpenSans-BoldItalic.ttf'),
  },
  {
    averia_serfi_libre: require('../../assets/fonts/AveriaSerifLibre-Regular.ttf'),
  },
  {
    alfa_slab_one: require('../../assets/fonts/AlfaSlabOne-Regular.ttf')
  },
]
export const fontAssets = fontsAll.map((x) => Font.loadAsync(x))
