import styled from 'styled-components';

import { ViewportWindowMargins, WindowType } from '../../windowManager/types';

export type WindowElementProps = Pick<
  WindowType,
  'height' | 'width' | 'positionX' | 'positionY' | 'isMinimized' | 'isMaximized'
> & {
  orderNumber: number;
  viewportWindowMargins: ViewportWindowMargins;
};

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
