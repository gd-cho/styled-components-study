import React from 'react';
import styled from 'styled-components';

const Props = () => {
  return (
    <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <WapperButton>Wapper Button</WapperButton>
      <br />
      <Input color="blue" defaultValue={`blue`} />
      <Input defaultValue={`default`} />
    </div>
  );
};

export default Props;

// 1. props属性
const Button = styled.button`
  background-color: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1.2rem;
  margin: 1rem;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

// 2. styled包装组件
const WapperButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// 3. 通过props传递属性
const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  color: ${(props) => props.color || 'palevioletred'};
`;
