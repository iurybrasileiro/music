import React, { FC, ReactNode } from 'react';

import { Container } from './styles';

interface IHeaderProps {
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
