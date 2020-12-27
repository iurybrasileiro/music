import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import {
  Container,
  MusicIndicatorContainer,
  MusicIndicatorContent,
  Content,
  MusicContainer,
  MusicImage,
  MusicInfo,
  MusicName,
  MusicArtistName,
  PlayerControls,
  ControlButton,
} from './styles';

const Player: FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <MusicIndicatorContainer>
        <MusicIndicatorContent />
      </MusicIndicatorContainer>
      <Content>
        <MusicContainer>
          <MusicImage />
          <MusicInfo>
            <MusicName>Chaff & Dust</MusicName>
            <MusicArtistName>HYONNA</MusicArtistName>
          </MusicInfo>
        </MusicContainer>
        <PlayerControls>
          <ControlButton>
            <Icon name="skip-back" size={30} color={theme.colors.secundary} />
          </ControlButton>
          <ControlButton>
            <Icon name="pause" size={30} color={theme.colors.secundary} />
          </ControlButton>
          <ControlButton>
            <Icon
              name="skip-forward"
              size={30}
              color={theme.colors.secundary}
            />
          </ControlButton>
        </PlayerControls>
      </Content>
    </Container>
  );
};

export default Player;
