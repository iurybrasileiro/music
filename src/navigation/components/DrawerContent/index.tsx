import React, { useCallback, FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import { useDispatch } from 'react-redux';

import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import { settingsUpdate } from '~/store/ducks/settings';

import { Container, Header } from './styles';

const DrawerContent: FC<DrawerContentComponentProps<DrawerContentOptions>> = ({
  navigation,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleToggleTheme = useCallback(() => {
    dispatch(
      settingsUpdate({ mode: theme.title === 'dark' ? 'light' : 'dark' }),
    );
  }, [dispatch, theme.title]);

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
          onPress={handleToggleTheme}
          hitSlop={{
            bottom: 10,
            top: 10,
            right: 10,
            left: 10,
          }}
        >
          <Icon
            name={theme.title === 'dark' ? 'sun' : 'moon'}
            size={30}
            color={theme.colors.secundary}
          />
        </TouchableOpacity>
      </Header>
    </Container>
  );
};

export default DrawerContent;
