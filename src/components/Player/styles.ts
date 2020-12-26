import { darken } from 'polished';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;

  padding-bottom: ${getBottomSpace() + 8}px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 8px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: ${getBottomSpace() + 8}px;
`;
export const MusicIndicatorContainer = styled.View`
  width: 100%;
  height: 4px;

  background: ${darken(0.4, '#fff')};
`;

export const MusicIndicatorContent = styled.View`
  width: 30px;
  height: 100%;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  background: #fff;
`;

export const MusicContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MusicImage = styled.View`
  width: 90px;
  height: 90px;

  border-radius: 4px;

  background: #7159c1;
`;

export const MusicInfo = styled.View`
  margin-left: 8px;
`;

export const MusicName = styled.Text`
  font-size: 20px;
  font-family: 'Montserrat-Bold';

  color: ${({ theme }) => theme.colors.secundary};
  margin-bottom: 8px;
`;

export const MusicArtistName = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat-Light';
  color: ${({ theme }) => theme.colors.text.secundary};
`;

export const PlayerControls = styled.View`
  flex-direction: row;
`;

export const ControlButton = styled.TouchableOpacity`
  margin: 0 4px;
`;
