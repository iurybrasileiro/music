import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import { Container, Header } from './styles';

const DrawerContent: FC<DrawerContentComponentProps<DrawerContentOptions>> = ({
  navigation,
}) => {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <TouchableOpacity
          onPress={navigation.closeDrawer}
          hitSlop={{
            bottom: 10,
            top: 10,
            right: 10,
            left: 10,
          }}
        >
          <Icon name="x" size={30} color={theme.colors.secundary} />
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={{
            bottom: 10,
            top: 10,
            right: 10,
            left: 10,
          }}
        >
          <Icon name="moon" size={30} color={theme.colors.secundary} />
        </TouchableOpacity>
      </Header>
    </Container>
  );
};

export default DrawerContent;
