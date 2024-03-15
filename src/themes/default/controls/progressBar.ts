import { css } from 'styled-components';

import { ProgressBarFillProps, ProgressBarProps } from '../../../controls';

export const ProgressBar = css<ProgressBarProps>`
  background: lightgray;
  border-radius: 1px;
  border: 1px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  box-sizing: border-box;
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  font-size: 12px;
  height: 24px;
  max-height: 100%;
  outline: none;
  width: 100%;
  overflow: hidden;
`;

export const ProgressBarFill = css<ProgressBarFillProps>`
  height: 100%;
  background: ${(props) => (props.disabled ? 'gray' : '#2222ff')};

  width: ${(props) =>
    props.isIndeterminate ? (props.disabled ? '0%' : '50%') : 'var(--width)'};
  ${(props) => !props.disabled && props.isIndeterminate && indeterminateStyle};

  @keyframes indeterminate-progress-bar-fill-animation {
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
  animation-name: indeterminate-progress-bar-fill-animation;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
