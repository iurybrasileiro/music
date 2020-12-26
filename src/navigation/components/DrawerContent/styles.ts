import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding-top: ${Platform.select({
    android: 0,
    ios: getStatusBarHeight() + 0,
  })}px;

  background: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
  padding: 8px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
