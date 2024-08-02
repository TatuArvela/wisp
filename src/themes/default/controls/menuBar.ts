import { css } from 'styled-components';

import { MenuBarThrobberIconElementProps } from '../../../controls';

export const MenuBarElement = css`
  background: white;
  border: 1px solid gray;
  box-shadow: -1px -1px 0 lightgray;
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  font-family: sans-serif;
  height: 28px;
  flex-shrink: 0;
  padding: 0;
  text-align: left;
  user-select: none;
  white-space: nowrap;
  width: 100%;
`;

export const MenuBarThrobberIconElement = css<MenuBarThrobberIconElementProps>`
  height: 16px;
  width: 16px;
  ${({ isAnimated }) => isAnimated && animatedMenuThrobber};

  @keyframes menu-bar-throbber-animation {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;

const animatedMenuThrobber = css`
  animation-name: menu-bar-throbber-animation;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

export const MenuBarThrobberContainer = css`
  align-self: end;
  background-color: black;
  height: 100%;
  margin-left: auto;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
