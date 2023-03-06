import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

// stack navigators
import { NewsNavigator, TasksNavigator} from '../stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'News':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.lightYellow : colors.lightPurple}
                size={20}
                solid
              />
            )
            case 'Tasks':
              return (
                <FontIcon
                  name="tasks"
                  color={focused ? colors.lightYellow : colors.lightPurple}
                  size={20}
                  solid
                />
              )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.lightPurple,
      inactiveTintColor: colors.gray,
      style: {
        // backgroundColor: 'white',
        // borderTopColor: 'gray',
        // borderTopWidth: 1,
        // paddingBottom: 5,
        // paddingTop: 5,
      },
    }}
  >
    <Tab.Screen name="News" component={NewsNavigator} />
    <Tab.Screen name="Tasks" component={TasksNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
