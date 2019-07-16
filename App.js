import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
}, {
  lazy: true,
});

export default createAppContainer(TabNavigator);
