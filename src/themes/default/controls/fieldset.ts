import { css } from 'styled-components';

export const FieldsetElement = css`
  border-radius: 2px;
  border: 1px solid black;
  font-family: sans-serif;
  padding: 8px;
  margin-bottom: 4px;
`;

export const FieldsetLegend = css`
  box-sizing: border-box;
  padding: 4px 8px;
  position: relative;

  &:before {
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    bottom: 0;
    box-sizing: border-box;
    content: '';
    height: 50%;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;
