import React from 'react';
import styled from 'styled-components';

export const ProgressBarThemeProperties = [
  'ProgressBar',
  'ProgressBarFill',
] as const;

export interface ProgressBarFillProps {
  disabled: boolean;
  isIndeterminate: boolean;
}

const ProgressBarFill = styled.div<ProgressBarFillProps>`
  ${(props) => props.theme.controls.ProgressBarFill}
`;

const ProgressBarElement = styled.div<{ disabled: boolean }>`
  ${(props) => props.theme.controls.ProgressBar}
`;

export interface ProgressBarProps {
  max?: number;
  value?: number;
  disabled?: boolean;
}

export const ProgressBar = ({
  max = 1,
  value,
  disabled = false,
}: ProgressBarProps) => {
  const isIndeterminate = value === undefined;
  const fillWidth = isIndeterminate ? undefined : `${(value / max) * 100}%`;

  return (
    <ProgressBarElement disabled={disabled}>
      <ProgressBarFill
        disabled={disabled}
        isIndeterminate={isIndeterminate}
        style={{ width: fillWidth }}
      />
    </ProgressBarElement>
  );
};

export default ProgressBar;
