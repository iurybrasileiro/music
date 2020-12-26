import React, { useEffect, FC } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import Player from '~/components/Player';
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
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 1000);
  }, []);

  return (
    <>
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
      <Player />
    </>
  );
};

export default Home;
