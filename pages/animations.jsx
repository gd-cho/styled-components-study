import React from 'react';
import styled, { keyframes } from 'styled-components';
const Animations = () => {
  return (
    <div>
      <Rotate>&lt;🤤&gt;</Rotate>
    </div>
  );
};

export default Animations;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 1rem 1rem;
  font-size: 1.5rem;
  margin: 1rem 1rem;
  cursor: pointer;
`;
