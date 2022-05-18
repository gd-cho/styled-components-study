import React from 'react';
import styled, { css } from 'styled-components';
const Pseudo = () => {
  return (
    <div>
      <P>Normal</P>
      <P>Brother</P>
      <div>------</div>
      <P>Adjacent</P>
      <P className={'tag'}>Tgged</P>
      <div className="container">
        <P>Container</P>
      </div>

      <div>
        <Label>
          <Input defaultChecked />
          <LabelText>Default</LabelText>
        </Label>
        <Label>
          <Input />
          <LabelText mode={'dark'}>Dark</LabelText>
        </Label>
      </div>
    </div>
  );
};

export default Pseudo;

const P = styled.p`
  color: blueviolet;
  width: 10rem;
  margin: 1rem;
  padding: 0.25em 1em;
  &:hover {
    color: tomato;
  } // 当 P组件hovered时

  & ~ & {
    background-color: bisque;
  } // P与P之间的兄弟姐妹，但不是直接紧挨着它

  & + & {
    border: 1px dotted cornflowerblue;
  } // 兄弟选择器

  &.tag {
    background-color: brown;
  } //  P 添加了额外的 .tag选择器

  .container & {
    border: 1px solid;
  } // P 在 .container选择器内部
`;

const Input = styled.input.attrs({ type: 'checkbox' })``;

const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const LabelText = styled.span`
  ${(props) => {
    switch (props.mode) {
      case 'dark':
        return css`
          background-color: aliceblue;
          ${Input}:checked + && {
            color: #20ec57;
          }
        `;
      default:
        return css`
          background-color: blueviolet;
          color: white;
          ${Input}:checked + && {
            color: red;
          }
        `;
    }
  }}
`;
