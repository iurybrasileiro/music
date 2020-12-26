import React, { FC, ReactNode } from 'react';

import { StackHeaderProps } from '@react-navigation/stack';

import { Container } from './styles';

interface IHeaderProps extends StackHeaderProps {
  left?: () => ReactNode;
  right?: () => ReactNode;
}

const Header: FC<IHeaderProps> = ({ left, right }) => {
  return (
    <Container>
      {left && left()}
      {right && right()}
    </Container>
  );
};

export default Header;
