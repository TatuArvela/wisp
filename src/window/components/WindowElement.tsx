import styled, { css } from 'styled-components';
import { WindowType } from 'window/types';

type WindowElementProps = Pick<
  WindowType,
  'height' | 'width' | 'positionX' | 'positionY' | 'isMinimized' | 'isMaximized'
> & {
  orderNumber: number;
};

const maximizedStyles = css`
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
`;

const minimizedStyles = css`
  display: none;
`;

const WindowElement = styled.div.attrs((props: WindowElementProps) => ({
  style: {
    top: `${props.positionY}px`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.positionX}px`,
    zIndex: props.orderNumber,
  },
}))<WindowElementProps>`
  background: white;
  border-radius: 3px;
  box-sizing: border-box;
  border: 3px solid white;
  box-shadow: 0 0 0 1px gray;
  color: black;
  padding: 0;
  position: absolute;

  ${(props) => props.isMaximized && maximizedStyles}
  ${(props) => props.isMinimized && minimizedStyles}
`;
export default WindowElement;
