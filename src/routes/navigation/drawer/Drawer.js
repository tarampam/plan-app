import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import { SearcherNavigator, TasksNavigator, KontaktNavigator, SettingsNavigator, ScannerQRNavigator, ScheduleNavigator, HomeNavigator} from "../stacks";

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  //newState.routes = newState.routes.filter((item) => item.name !== 'Home')
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home" component={HomeNavigator} drawerContent={DrawerMenuContainer}>
    <Drawer.Screen name="Home" component={HomeNavigator} />
    <Drawer.Screen name="Aktualnosci" component={TabNavigator}/>
    <Drawer.Screen name="Plan zajęć" component={ScheduleNavigator} />
    <Drawer.Screen name="QR" component={ScannerQRNavigator} />
    <Drawer.Screen name="Kontakt" component={KontaktNavigator} />
    <Drawer.Screen name="Wyszukaj" component={SearcherNavigator} />
    <Drawer.Screen name="ToDo List" component={TasksNavigator} />
    <Drawer.Screen name="Ustawienia" component={SettingsNavigator} />
  </Drawer.Navigator>
)

export default DrawerNavigator
