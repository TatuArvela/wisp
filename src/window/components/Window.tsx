import styled, { css } from 'styled-components';

import { WindowType } from '../types';

type WindowProps = Pick<
  WindowType,
  'height' | 'width' | 'positionX' | 'positionY'
> & {
  isMaximized: boolean;
};

const maximizedStyles = css`
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
`;

const Window = styled.div<WindowProps>`
  background: white;
  border: 3px solid white;
  color: black;
  height: ${(props) => props.height}px;
  left: ${(props) => props.positionX}px;
  padding: 0;
  position: absolute;
  top: ${(props) => props.positionY}px;
  width: ${(props) => props.width}px;
  box-shadow: 0 0 0 1px gray;
  border-radius: 3px;

  ${(props) => props.isMaximized && maximizedStyles}
`;
export default Window;
