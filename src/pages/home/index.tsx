import React, { FC } from 'react';
import strings from '~/global/strings';

import {
  Container,
  ListTitle,
  AlbumsList,
  AlbumContainer,
  AlbumImage,
  AlbumTitle,
  AlbumArtistName,
} from './styles';

const Home: FC = () => {
  return (
    <Container>
      <ListTitle>{strings.recommented_for_you}</ListTitle>
      <AlbumsList
        data={Array(4).fill('')}
        renderItem={() => (
          <AlbumContainer>
            <AlbumImage />
            <AlbumTitle>Monsters Go Bump</AlbumTitle>
            <AlbumArtistName>ERIKA RECINOS</AlbumArtistName>
          </AlbumContainer>
        )}
      />
      <ListTitle>{strings.my_playlist}</ListTitle>
      <AlbumsList
        data={Array(4).fill('')}
        renderItem={() => (
          <AlbumContainer>
            <AlbumImage />
            <AlbumTitle>Monsters Go Bump</AlbumTitle>
          </AlbumContainer>
        )}
      />
    </Container>
  );
};

export default Home;
