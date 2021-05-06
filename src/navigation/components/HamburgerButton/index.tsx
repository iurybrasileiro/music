import React, { useCallback, FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import { Icon } from '~/components';
import iconHelper from '~/components/Icon/iconHelper';

const HamburgerButton: FC = () => {
  const naviagtion = useNavigation();

  const handleOpenDrawer = useCallback(() => {
    naviagtion.dispatch(DrawerActions.toggleDrawer());
  }, [naviagtion]);

  return (
    <TouchableOpacity onPress={handleOpenDrawer}>
      <Icon name={iconHelper.list} />
    </TouchableOpacity>
  );
};

export default HamburgerButton;
