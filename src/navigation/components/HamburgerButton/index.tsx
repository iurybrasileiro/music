import React, { useCallback, FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import { DrawerActions, useNavigation } from '@react-navigation/native';

const HamburgerButton: FC = () => {
  const naviagtion = useNavigation();
  const theme = useTheme();

  const handleOpenDrawer = useCallback(() => {
    naviagtion.dispatch(DrawerActions.openDrawer());
  }, [naviagtion]);

  return (
    <TouchableOpacity onPress={handleOpenDrawer}>
      <Icon name="menu" size={30} color={theme.colors.secundary} />
    </TouchableOpacity>
  );
};

export default HamburgerButton;
