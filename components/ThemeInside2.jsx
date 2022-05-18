import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const ThemeInside2 = () => {
  const themeProps = useContext(ThemeContext);
  console.log('theme ThemeContext:', themeProps);
  return (
    <div>
      <P>Using ThemeContext</P>
    </div>
  );
};

export default ThemeInside2;

const P = styled.p`
  color: ${(p) => p.theme.color};
`;
