import styled from 'styled-components';

import { ViewportWindowMargins } from '../../windowManager/types';

export const WindowElementThemeProperties = ['WindowElement'] as const;

export interface WindowElementProps {
  height: number;
  width: number;
  positionX: number;
  positionY: number;
  isMinimized: boolean;
  isMaximized: boolean;
  orderNumber: number;
  viewportWindowMargins: ViewportWindowMargins;
}

const WindowElement = styled.div.attrs((props: WindowElementProps) => ({
  style: {
    top: `${props.positionY}px`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.positionX}px`,
    zIndex: props.orderNumber,
  },
}))<WindowElementProps>`
  ${(props) => props.theme.window.WindowElement}
`;
export default WindowElement;
