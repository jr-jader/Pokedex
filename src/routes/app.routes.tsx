import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';

import { Welcome } from '../pages/Welcome';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Search } from '../pages/Search';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

export function AppRoutes() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Welcome') {
              iconName = 'home';
            } else if (route.name === 'HomeStack') {
              iconName = 'book';
            } else if (route.name === 'Search') {
              iconName = 'search';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#58ABF6',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'white',
          },
          labelStyle: {
            fontSize: 16,
          },
        }}
      >
        <Tab.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerBackground: () => null,
            headerTitle: () => null,
            tabBarLabel: 'Welcome',
          }}
        />
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerBackground: () => null,
            headerTitle: () => null,
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            headerBackground: () => null,
            headerTitle: () => null,
            tabBarLabel: 'Search',
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
