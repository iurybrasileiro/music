import React, { FC } from 'react';
import { useTheme } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '~/components/Header';
import SearchBar from '~/components/SearchBar';

import Home from '~/pages/home';

import DrawerContent from './components/DrawerContent';
import HamburgerButton from './components/HamburgerButton';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Navigation: FC = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Main">
          {() => (
            <Stack.Navigator
              screenOptions={{
                header: props => (
                  <Header
                    {...props}
                    left={() => <HamburgerButton />}
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
