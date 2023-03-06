import React from 'react'
import PropTypes from 'prop-types'
import {View, SafeAreaView, Image} from 'react-native'

import { DrawerActions } from '@react-navigation/native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'
import {images} from "../../../theme";

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
}

const DrawerMenu = (props) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <FontIcon.Button
        name="times"
        size={20}
        color={colors.lightYellow}
        backgroundColor="white"
        onPress={() => {
          props.navigation.dispatch(DrawerActions.closeDrawer())
        }}
      />
    </View>
    <View style={styles.main}>
      <Image source={images.logo_sm} style={styles.logo} />
    </View>
  </SafeAreaView>
)

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu
