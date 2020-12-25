import styled from 'styled-components/native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: ${Platform.select({
    android: 60,
    ios: getBottomSpace() + 60,
  })}px;

  padding: 0px 16px;

  padding-top: ${Platform.select({
    android: 8,
    ios: getBottomSpace(),
  })}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary};
`;
