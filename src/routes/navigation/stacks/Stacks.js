import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from '../../../scenes/home'
import Login from '../../../scenes/login'
import Tasks from '../../../scenes/tasks'
import Searcher from '../../../scenes/searcher'
import Kontakt from '../../../scenes/kontakt'
import Settings from '../../../scenes/settings/Settings'
import ScannerQR from '../../../scenes/scannerQR'
import Form from '../../../scenes/form/Form'
import Schedule from '../../../scenes/schedule/Schedule'
import News from '../../../scenes/news/News'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import HeaderRight from "./HeaderRight";
import TabNavigator from "../tabs";

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkGrey },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
    />
    <Stack.Screen
      name="Login"
      component={Login}
    />
    <Stack.Screen
      name="Registration"
      component={Form}
    />
    <Stack.Screen
      name="News"
      component={TabNavigator}
    />
  </Stack.Navigator>
)

export const TasksNavigator = () => (
  <Stack.Navigator
    initialRouteName="Tasks"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Tasks"
      component={Tasks}
      options={({ navigation }) => ({
        title: 'Tasks',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
        headerRight: () => <HeaderRight navigation={navigation}/>,
      })}
    />
    <Stack.Screen
      name="Home"
      component={Home}
    />
  </Stack.Navigator>
)
export const SearcherNavigator = () => (
  <Stack.Navigator
    initialRouteName="Searcher"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Searcher"
      component={Searcher}
      options={({ navigation }) => ({
        title: 'Searcher',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
        headerRight: () => <HeaderRight navigation={navigation}/>,
      })}
    />
    <Stack.Screen
      name="Home"
      component={Home}
    />
  </Stack.Navigator>
)
export const KontaktNavigator = () => (
  <Stack.Navigator
    initialRouteName="Kontakt"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Kontakt"
      component={Kontakt}
      options={({ navigation }) => ({
        title: 'Kontakt',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
        headerRight: () => <HeaderRight navigation={navigation}/>,
      })}
    />
    <Stack.Screen
      name="Home"
      component={Home}
    />
  </Stack.Navigator>
)
export const SettingsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Settings"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={({ navigation }) => ({
        title: 'Settings',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
        headerRight: () => <HeaderRight navigation={navigation}/>,
      })}
    />
    <Stack.Screen
      name="Home"
      component={Home}
    />
  </Stack.Navigator>
)
export const ScannerQRNavigator = () => (
  <Stack.Navigator
    initialRouteName="ScannerQR"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="ScannerQR"
      component={ScannerQR}
      options={({ navigation }) => ({
        title: 'ScannerQR',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
        headerRight: () => <HeaderRight navigation={navigation}/>,
      })}
    />
    <Stack.Screen
      name="Home"
      component={Home}
    />
  </Stack.Navigator>
)

export const ScheduleNavigator = () => (
  <Stack.Navigator
    initialRouteName="Schedule"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Schedule"
      component={Schedule}
      options={({ navigation }) => ({
        title: 'Schedule',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
        headerRight: () => <HeaderRight navigation={navigation}/>,
      })}
    />
    <Stack.Screen
      name="Home"
      component={Home}
    />
  </Stack.Navigator>
)

export const NewsNavigator = () => (
  <Stack.Navigator
    initialRouteName="News"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="News"
      component={News}
      options={({ navigation }) => ({
        title: 'News',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
        headerRight: () => <HeaderRight navigation={navigation}/>,
      })}
    />
    <Stack.Screen
      name="Home"
      component={Home}
    />
  </Stack.Navigator>
)

