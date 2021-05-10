import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, OrderDelivery, Restarunt} from './screens';
import Tabs from './navigation/Tabs';
import {COLORS} from './constants';
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={COLORS.lightGray4}
        barStyle="dark-content"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Restarunt" component={Restarunt} />
          <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
