import React, { FC } from 'react';

import Icon from '../Icon';
import iconHelper from '../Icon/iconHelper';

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
            <Icon name={iconHelper.skipBack} />
          </ControlButton>
          <ControlButton>
            <Icon name={iconHelper.pause} />
          </ControlButton>
          <ControlButton>
            <Icon name={iconHelper.skipForward} />
          </ControlButton>
        </PlayerControls>
      </Content>
    </Container>
  );
};

export default Player;
