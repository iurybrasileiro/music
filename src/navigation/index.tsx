import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '~/components/Header';
import SearchBar from '~/components/SearchBar';

import Home from '~/pages/home';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Navigation: FC = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main">
          {() => (
            <Stack.Navigator
              screenOptions={{
                header: () => (
                  <Header
                    left={() => <Icon name="menu" size={30} color="#fff" />}
                    right={() => <SearchBar />}
                  />
                ),
                cardStyle: {
                  backgroundColor: theme.colors.primary,
                },
              }}
            >
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
