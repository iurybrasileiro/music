import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import {
  Container,
  MusicContainer,
  MusicImage,
  MusicInfo,
  MusicName,
  MusicArtistName,
  PlayerControls,
} from './styles';

const Player: FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <MusicContainer>
        <MusicImage />
        <MusicInfo>
          <MusicName>Chaff & Dust</MusicName>
          <MusicArtistName>HYONNA</MusicArtistName>
        </MusicInfo>
      </MusicContainer>
      <PlayerControls>
        <TouchableOpacity>
          <Icon name="skip-back" size={30} color={theme.colors.secundary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="pause" size={30} color={theme.colors.secundary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="skip-forward" size={30} color={theme.colors.secundary} />
        </TouchableOpacity>
      </PlayerControls>
    </Container>
  );
};

export default Player;
