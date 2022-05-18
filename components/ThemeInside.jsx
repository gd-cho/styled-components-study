import React from 'react';
import styled, { useTheme } from 'styled-components';

const ThemeInside = () => {
  const theme = useTheme();
  console.log('theme useTheme:', theme);
  return (
    <div>
      <P>Using useTheme Hook</P>
    </div>
  );
};

export default ThemeInside;

const P = styled.p`
  color: ${(p) => p.theme.color};
`;
