import styled, { css } from 'styled-components';

import { WindowType } from '../../windowManager/types';

type WindowElementProps = Pick<
  WindowType,
  'height' | 'width' | 'positionX' | 'positionY' | 'isMinimized' | 'isMaximized'
> & {
  orderNumber: number;
};

const styles = css`
  background: white;
  border-radius: 3px;
  box-sizing: border-box;
  border: 3px solid white;
  box-shadow: 0 0 0 1px gray;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 0;
  position: absolute;
`;

const minimizedStyles = css`
  display: none;
`;

const WindowElement = styled.div.attrs((props: WindowElementProps) => ({
  style: props.isMaximized
    ? // TODO: Get maximized size and position from windowManager
      {
        height: '100%',
        left: '0',
        top: '0',
        width: '100%',
        zIndex: props.orderNumber,
      }
    : {
        top: `${props.positionY}px`,
        width: `${props.width}px`,
        height: `${props.height}px`,
        left: `${props.positionX}px`,
        zIndex: props.orderNumber,
      },
}))<WindowElementProps>`
  ${styles}
  ${(props) => props.isMinimized && minimizedStyles}
`;
export default WindowElement;
