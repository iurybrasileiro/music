import React, { useEffect, FC } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import AlbumList from '~/components/AlbumList';

import Player from '~/components/Player';
import strings from '~/global/strings';

import { Container } from './styles';

const Home: FC = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 1000);
  }, []);

  return (
    <>
      <Container>
        <AlbumList
          title={strings.recommented_for_you}
          data={Array(4).fill({
            name: 'Monsters Go Bump',
            artist: 'ERIKA RECINOS',
          })}
        />
        <AlbumList
          title={strings.my_playlist}
          data={Array(4).fill({
            name: 'Monsters Go Bump',
          })}
        />
      </Container>
      <Player />
    </>
  );
};

export default Home;
