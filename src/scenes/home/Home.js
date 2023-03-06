import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, ImageBackground, Image
} from 'react-native'
import Button from 'components/Button'
import { colors, images, fonts } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image_l:{
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 50,
    marginTop: 10,
    fontFamily: fonts.averiaSerfiLibre.regular,
    color: 'black',
  },
})

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <ImageBackground source={images.bg_home} resizeMode="cover" style={styles.image}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>WELCOME!</Text>
      <Image source={images.logo_home} style={styles.image_l}></Image>

      <Button
        //style={StyleSheet.create({ marginBottom: 10 })}
        title="Logowanie"
        color="white"
        backgroundColor={colors.darkGrey}
        onPress={() => {
          navigation.navigate('Login', { from: 'Home' })
        }}
      />

      <Button
        title="Rejestracja"
        color="white"
        backgroundColor={colors.darkGrey}
        onPress={() => {
          navigation.navigate('Registration', { from: 'Home' })
        }}
      />
    </ImageBackground>
  </View>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
