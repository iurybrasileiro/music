import React from 'react';
import { createIconSet } from 'react-native-vector-icons';
import { useTheme } from 'styled-components';

import awesomeicons from '~/config/awesomeicons.json';

const RNIcon = createIconSet(awesomeicons, 'awesomeicons', 'awesomeicons.ttf');

interface IIconProps {
  name: string;
  color?: string;
  size?: number;
}

const Icon: React.FC<IIconProps> = ({ name, size = 30, color }) => {
  const theme = useTheme();

  return <RNIcon {...{ name, size, color: color || theme.colors.secundary }} />;
};

export default Icon;
