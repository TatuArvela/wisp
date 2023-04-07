import { css } from 'styled-components';

export const CheckboxWrapper = css`
  display: block;
`;

const checkedStyle = css`
  &:before {
    content: '✔';
    font-size: 20px;
    line-height: 20px;
    position: absolute;
    text-align: center;
    top: 1px;
    width: 100%;
  }
`;

export const Checkbox = css<{ checked: boolean }>`
  background: white;
  border: 1px solid black;
  border-radius: 2px;
  box-shadow: 1px 1px 0 0 gray;
  height: 20px;
  position: relative;
  width: 20px;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    background: lightgray;
  }

  ${(props) => props.checked && checkedStyle}
`;
