import React, { useCallback, FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { useDispatch } from 'react-redux';

import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import { Icon } from '~/components';

import { settingsUpdate } from '~/store/ducks/settings';

import { Container, Header } from './styles';
import iconHelper from '~/components/Icon/iconHelper';

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
          <Icon name={iconHelper.x} />
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
          <Icon name={iconHelper[theme.title === 'dark' ? 'sun' : 'moon']} />
        </TouchableOpacity>
      </Header>
    </Container>
  );
};

export default DrawerContent;
