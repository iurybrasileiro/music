import styled from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;

  padding: 8px 14px;
`;

export const ListTitle = styled.Text`
  margin-left: 14px;
  margin-bottom: 8px;

  font-size: 26px;
  font-family: 'Montserrat-Bold';
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const AlbumsList = styled(FlatList as new () => FlatList<any>).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  keyExtractor: (_, index) => String(index),
})`
  margin-bottom: 32px;
`;

export const AlbumContainer = styled.View`
  width: ${Dimensions.get('window').width / 2}px;

  border-radius: 4px;
  margin: 0px 14px;

  align-items: center;
`;

export const AlbumImage = styled.View`
  width: 100%;
  height: ${Dimensions.get('window').width / 2}px;

  border-radius: 4px;
  margin-bottom: 8px;

  background: #7159c1;
`;

export const AlbumTitle = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat-Bold';
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const AlbumArtistName = styled.Text`
  font-size: 12px;
  font-family: 'Montserrat-Light';
  color: ${({ theme }) => theme.colors.text.secundary};
`;
