import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 8px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: ${getBottomSpace() + 8}px;
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
  font-weight: 500;

  color: ${({ theme }) => theme.colors.secundary};
  margin-bottom: 8px;
`;

export const MusicArtistName = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secundary};
`;

export const PlayerControls = styled.View`
  flex-direction: row;
`;
