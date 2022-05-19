import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import ThemeInside from '../components/ThemeInside';
import ThemeInside2 from '../components/ThemeInside2';

const Theme = () => {
  return (
    <div>
      <h2>Theme</h2>
      <Button borderStyle={'double'}>Default</Button>
      <ThemeProvider
        theme={{
          main: 'mediumseagreen',
        }}
      >
        <Button>Theme</Button>
      </ThemeProvider>
      <br />
      <h2>Function Theme</h2>
      <ThemeProvider
        theme={{
          bg: 'palevioletred',
          fg: 'white',
        }}
      >
        <Button2>Default Theme</Button2>
        <ThemeProvider theme={invertTheme}>
          <Button2>Invert Theme</Button2>
          <ThemeInside />
          <ThemeInside2 />
        </ThemeProvider>
      </ThemeProvider>
      <br />
      <h2>Theme Prop</h2>
      <Button3
        theme={{
          main: 'red',
        }}
      >
        No In Theme
      </Button3>
      <ThemeProvider
        theme={{
          main: 'dodgerblue',
        }}
      >
        <Button3>Deault Theme</Button3>
        <Button3
          theme={{
            main: '#d468ff',
          }}
        >
          Override Theme
        </Button3>
      </ThemeProvider>
    </div>
  );
};

export default Theme;

// 1. Theme
const Button = styled.button`
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
  border-style: ${(p) => p.borderStyle};

  // Dynamic Props For Theme
  color: ${(p) => p.theme.main};
  border-color: ${(p) => p.theme.main};
`;

// Here We Can Define Default Props For Button Component
Button.defaultProps = {
  borderStyle: 'dotted',
  // Theme Default Props
  theme: {
    main: 'palevioletred',
  },
};

// 2. Function Theme

const Button2 = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
  color: 'palevioletred',
});

// 3. Theme Overrider Or Circumvent Component
const Button3 = styled.button`
  color: ${(p) => p.theme.main};
  border: 2px solid ${(p) => p.theme.main};
  margin: 1rem;
  padding: 0.25rem 1rem;
  border-radius: 3px;
  background-color: white;
`;
