import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useResizeObserver from 'use-resize-observer';

export const ProgressBarThemeProperties = [
  'ProgressBar',
  'ProgressBarFill',
] as const;

export interface ProgressBarFillProps {
  disabled: boolean;
  isIndeterminate: boolean;
  variant: 'steps' | 'block';
}

const ProgressBarFill = styled.div<ProgressBarFillProps>`
  ${(props) => props.theme.controls.ProgressBarFill}
`;

const ProgressBarElement = styled.div<{ disabled: boolean }>`
  ${(props) => props.theme.controls.ProgressBar}
`;

export interface ProgressBarProps {
  disabled?: boolean;
  max?: number;
  value?: number;
  variant?: 'steps' | 'block';
}

const getStepWidth = (current: HTMLDivElement) => {
  if (!current) return undefined;
  const stepWidthValue =
    getComputedStyle(current).getPropertyValue('--step-width');
  if (!stepWidthValue) return undefined;
  return parseInt(stepWidthValue.replace('px', ''));
};

const calculateWidth = ({
  elementWidth,
  max,
  stepWidth = 1,
  value,
  variant,
}: {
  elementWidth: number;
  max: number;
  stepWidth: number | undefined;
  value: number;
  variant: 'steps' | 'block';
}) => {
  const ratio = value === undefined || max === undefined ? 0.5 : value / max;

  if (variant === 'block') {
    return `${ratio * 100}%`;
  }

  let calculatedWidth = elementWidth * ratio;
  calculatedWidth = Math.floor(calculatedWidth / stepWidth) * stepWidth;
  calculatedWidth = Math.min(calculatedWidth, elementWidth);
  return `${calculatedWidth}px`;
};

export const ProgressBar = ({
  disabled = false,
  max = 1,
  value,
  variant = 'block',
}: ProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width: elementWidth = 1 } = useResizeObserver<HTMLDivElement>({
    ref,
  });
  const [width, setWidth] = useState<string | undefined>();
  const isIndeterminate = value === undefined || max === undefined;

  useEffect(() => {
    setWidth(
      calculateWidth({
        elementWidth,
        max,
        stepWidth: getStepWidth(ref.current),
        value,
        variant,
      })
    );
  }, [elementWidth, isIndeterminate, max, value, variant]);

  return (
    <ProgressBarElement disabled={disabled} ref={ref}>
      <ProgressBarFill
        disabled={disabled}
        isIndeterminate={isIndeterminate}
        variant={variant}
        style={
          {
            '--width': width,
          } as React.CSSProperties
        }
      />
    </ProgressBarElement>
  );
};

export default ProgressBar;
