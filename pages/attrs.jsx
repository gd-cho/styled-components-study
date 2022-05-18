import React from 'react';
import styled from 'styled-components';
const Attrs = (props) => {
  return (
    <div>
      <Input placeholder="Normal Input" />
      <br />
      <Input size={`2rem`} placeholder="Input Fllowing Size Prop" />
      <br />
      <OverrideInput placeholder="Override Input" />
    </div>
  );
};

export default Attrs;

const Input = styled.input.attrs((props) => ({
  // 静态属性
  type: 'text',

  // 动态属性
  size: props.size || '1em',
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  // 动态计算属性
  margin: ${(props) => props.size || `1rem`};
  padding: ${(props) => props.size || `1rem`};
`;

const OverrideInput = styled(Input).attrs((props) => ({
  type: 'password',
}))`
  border-color: #65a3d9;
`;
