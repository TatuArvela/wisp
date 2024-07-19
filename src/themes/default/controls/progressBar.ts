import { css } from 'styled-components';

import {
  ProgressBarElementProps,
  ProgressBarFillProps,
} from '../../../controls';

const borderedStyle = css<ProgressBarElementProps>`
  border: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
`;

export const ProgressBarElement = css<ProgressBarElementProps>`
  ${(props) => props.bordered && borderedStyle}
  background: lightgray;
  border-radius: 1px;
  box-sizing: border-box;
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  font-size: 12px;
  height: 24px;
  max-height: 100%;
  outline: none;
  overflow: hidden;
  width: 100%;
`;

export const ProgressBarFill = css<ProgressBarFillProps>`
  height: 100%;
  background: ${(props) => (props.disabled ? 'gray' : '#2222ff')};

  width: ${(props) =>
    props.isIndeterminate ? (props.disabled ? '0%' : '50%') : 'var(--width)'};
  ${(props) => !props.disabled && props.isIndeterminate && indeterminateStyle};

  @keyframes wisp-indeterminate-progress-bar-fill-animation {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(200%);
    }
  }
`;

const indeterminateStyle = css`
  animation-duration: 1s;
  animation-name: wisp-indeterminate-progress-bar-fill-animation;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
