import React, { FC } from 'react';

import {
  Container,
  Title,
  List,
  AlbumContainer,
  AlbumImage,
  AlbumTitle,
  AlbumArtistName,
} from './styles';

export interface IData {
  name: string;
  artist?: string;
}

interface IAlbumListProps {
  title: string;
  data: IData[];
}

const AlbumList: FC<IAlbumListProps> = ({ title, data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List
        data={data}
        renderItem={({ item }) => (
          <AlbumContainer>
            <AlbumImage />
            <AlbumTitle>{item.name}</AlbumTitle>
            {item.artist ? (
              <AlbumArtistName>{item.artist}</AlbumArtistName>
            ) : null}
          </AlbumContainer>
        )}
      />
    </Container>
  );
};

export default AlbumList;
