import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

const SettingsComponents = ({ settingsOptions }) => (
  <ScrollView style={{ backgroundColor: 'white' }}>
    {settingsOptions.map(({ title, subTitle }) => (
      <TouchableOpacity key={title}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 20,
            paddingTop: 20,
          }}
        >
          <Text style={{ fontSize: 17 }}>{title}</Text>
          {subTitle && (
            <Text style={{ fontSize: 14, opacity: 0.5, paddingTop: 5 }}>
              {subTitle}
            </Text>
          )}
        </View>
        <View style={{ height: 0.5, backgroundColor: 'grey' }} />
      </TouchableOpacity>
    ))}
  </ScrollView>
)

SettingsComponents.propTypes = {
  settingsOptions: PropTypes.arrayOf,
}

SettingsComponents.defaultProps = {
  settingsOptions: [],
}

export default SettingsComponents
