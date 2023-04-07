import { css } from 'styled-components';

const size = 5;
const offset = -5;

const sharedStyle = css`
  box-sizing: border-box;
  position: absolute;
`;

export const NResize = css`
  ${sharedStyle};
  top: ${offset}px;
  left: ${offset}px;
  right: ${offset}px;
  height: ${size}px;
  cursor: n-resize;
`;

export const NEResize = css`
  ${sharedStyle};
  top: ${offset}px;
  right: ${offset}px;
  height: ${size * 2}px;
  width: ${size * 2}px;
  cursor: ne-resize;
`;

export const EResize = css`
  ${sharedStyle};
  top: ${offset}px;
  bottom: ${offset}px;
  right: ${offset}px;
  width: ${size}px;
  cursor: e-resize;
`;

export const SEResize = css`
  ${sharedStyle};
  bottom: ${offset}px;
  right: ${offset}px;
  height: ${size * 2}px;
  width: ${size * 2}px;
  cursor: se-resize;
`;

export const SResize = css`
  ${sharedStyle};
  bottom: ${offset}px;
  left: ${offset}px;
  right: ${offset}px;
  height: ${size}px;
  cursor: s-resize;
`;

export const SWResize = css`
  ${sharedStyle};
  bottom: ${offset}px;
  left: ${offset}px;
  height: ${size * 2}px;
  width: ${size * 2}px;
  cursor: sw-resize;
`;

export const WResize = css`
  ${sharedStyle};
  top: ${offset}px;
  bottom: ${offset}px;
  left: ${offset}px;
  width: ${size}px;
  cursor: w-resize;
`;

export const NWResize = css`
  ${sharedStyle};
  top: ${offset}px;
  left: ${offset}px;
  height: ${size * 2}px;
  width: ${size * 2}px;
  cursor: nw-resize;
`;
