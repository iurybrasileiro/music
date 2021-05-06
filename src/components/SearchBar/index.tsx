import React, { useState, useEffect, useCallback, FC } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components';
import Icon from '../Icon';

import { Container, Content, Input } from './styles';
import iconHelper from '../Icon/iconHelper';

const ICON_WIDTH = 30;

const SearchBar: FC = () => {
  const theme = useTheme();

  const [opened, setOpened] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const animation = useSharedValue(0);

  useEffect(() => {
    animation.value = withTiming(opened ? 0 : 1);
  }, [animation, opened]);

  const animatedContentStyle = useAnimatedStyle(() => ({
    width: interpolate(animation.value, [0, 1], [ICON_WIDTH, containerWidth]),
    paddingHorizontal: interpolate(animation.value, [0, 1], [0, 8]),
    backgroundColor: interpolateColor(
      animation.value,
      [0, 0.2],
      [theme.colors.primary, theme.colors.secundary],
      'RGB',
    ) as string,
  }));

  const handleToggleOpened = useCallback(() => {
    setOpened(oldOpened => !oldOpened);
  }, []);

  return (
    <Container
      onLayout={({ nativeEvent }) => {
        const { width } = nativeEvent.layout;
        setContainerWidth(width);
      }}
    >
      <Content style={animatedContentStyle}>
        <Input placeholder="Pesquise aqui..." />
        <TouchableOpacity activeOpacity={0.6} onPress={handleToggleOpened}>
          {opened ? (
            <Icon name={iconHelper.magnifyingGlass} />
          ) : (
            <Icon name={iconHelper.x} color={theme.colors.primary} />
          )}
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

export default SearchBar;
