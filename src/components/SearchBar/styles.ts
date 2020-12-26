import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled(Animated.View)`
  height: 50px;

  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  margin: 0px 8px;
`;

export const Content = styled(Animated.View)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 4px;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.input.placeholder,
}))`
  flex: 1;
  height: 50px;

  color: ${({ theme }) => theme.colors.input.color}
  font-size: 18px;

  border-radius: 4px;

  margin-right: 8px;
`;
