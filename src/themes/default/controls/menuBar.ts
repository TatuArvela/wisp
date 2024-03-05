import { css } from 'styled-components';

import { MenuBarThrobberProps } from '../../../controls';
import menuBarThrobberIcon from './menuBarThrobberIcon.png';

export const MenuBar = css`
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

export const MenuBarThrobber = css<MenuBarThrobberProps>`
  align-self: end;
  background-color: black;
  background-image: url('${menuBarThrobberIcon}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  height: 100%;
  margin-left: auto;
  width: 40px;

  ${({ isAnimated }) => isAnimated && animatedMenuThrobber};

  @keyframes menu-bar-throbber-animation {
    0% {
      background-size: 16px 16px;
    }
    100% {
      background-size: 18px 18px;
    }
  }
`;

const animatedMenuThrobber = css`
  animation-name: menu-bar-throbber-animation;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;
