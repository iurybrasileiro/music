import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled(Animated.View)`
  height: 50px;

  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  margin-left: 8px;
`;

export const Content = styled(Animated.View)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 4px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 50px;

  font-size: 18px;

  border-radius: 4px;

  margin-right: 8px;
`;
