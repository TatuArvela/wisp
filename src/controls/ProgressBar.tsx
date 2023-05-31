import React from 'react';
import styled from 'styled-components';

export const ProgressBarThemeProperties = [
  'ProgressBar',
  'ProgressBarFill',
] as const;

const ProgressBarFill = styled.div<{
  disabled: boolean;
  isIndeterminate: boolean;
}>`
  ${(props) => props.theme.controls.ProgressBarFill}
`;

const ProgressBarElement = styled.div<{ disabled: boolean }>`
  ${(props) => props.theme.controls.ProgressBar}
`;

interface ProgressBarProps {
  max?: number;
  value?: number;
  disabled?: boolean;
}

const ProgressBar = ({
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
