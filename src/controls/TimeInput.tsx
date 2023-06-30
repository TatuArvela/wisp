import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import ControlWrapper, { ControlWrapperProps } from './ControlWrapper';

export const TimeInputThemeProperties = [
  'TimeInputWrapper',
  'TimeInputLabel',
  'TimeInputControl',
  'TimeInputField',
  'TimeInputValue',
  'TimeInputSeparator',
  'TimeInputButtons',
  'TimeInputIncreaseButton',
  'TimeInputDecreaseButton',
] as const;

export type Time = {
  hours: number;
  minutes: number;
};

const TimeInputWrapper = styled(ControlWrapper)`
  ${(props) => props.theme.controls.TimeInputWrapper}
`;

export interface TimeInputLabelProps {
  disabled?: boolean;
}

const TimeInputLabel = styled.label<TimeInputLabelProps>`
  ${(props) => props.theme.controls.TimeInputLabel}
`;

const TimeInputControl = styled.div`
  ${(props) => props.theme.controls.TimeInputControl}
`;

export interface TimeInputFieldProps {
  disabled?: boolean;
}

const TimeInputField = styled.div<TimeInputFieldProps>`
  ${(props) => props.theme.controls.TimeInputField}
`;

export interface TimeInputValueProps {
  disabled?: boolean;
}

const TimeInputValue = styled.input<TimeInputValueProps>`
  ${(props) => props.theme.controls.TimeInputValue}
`;

const TimeInputSeparator = styled.div`
  ${(props) => props.theme.controls.TimeInputSeparator}
`;

const TimeInputButtons = styled.div`
  ${(props) => props.theme.controls.TimeInputButtons}
`;

export interface TimeInputButtonProps {
  active?: boolean;
  disabled?: boolean;
}

const TimeInputDecreaseButton = styled.button<TimeInputButtonProps>`
  ${(props) => props.theme.controls.TimeInputDecreaseButton}
`;

const TimeInputIncreaseButton = styled.button<TimeInputButtonProps>`
  ${(props) => props.theme.controls.TimeInputIncreaseButton}
`;

export interface TimeInputProps extends ControlWrapperProps {
  disabled?: boolean;
  label?: string;
  nullable?: boolean;
  onChange(value: Time): void;
  value?: Time;
}

export const TimeInput = ({
  disabled,
  inlineLabel,
  label,
  onChange,
  value,
}: TimeInputProps) => {
  const [activeField, setActiveField] = useState<keyof Time>('hours');
  const [activeButton, setActiveButton] = useState<
    'increase' | 'decrease' | undefined
  >();
  const [activeButtonTimeout, setActiveButtonTimeout] =
    useState<NodeJS.Timeout>();

  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);
  const increaseButtonRef = useRef<HTMLButtonElement>(null);
  const decreaseButtonRef = useRef<HTMLButtonElement>(null);

  const hoursDisplay = value?.hours.toString().padStart(2, '0') ?? '00';
  const minutesDisplay = value?.minutes.toString().padStart(2, '0') ?? '00';

  const buttonClickHandler = (button: 'increase' | 'decrease') => () => {
    if (disabled) return;
    onChange(changeTime(value, activeField, button === 'increase' ? 1 : -1));
    setActiveButton(button);
    clearTimeout(activeButtonTimeout);
    setActiveButtonTimeout(
      setTimeout(() => {
        setActiveButton(undefined);
      }, 200)
    );
  };

  const changeHandler = (field: keyof Time) => (e) => {
    if (disabled) return;
    onChange({
      ...value,
      [field]: parseInt(e.target.value.substr(-2)),
    });
  };

  const blurHandler = () => {
    if (disabled) return;
    value && onChange(constrainTime(value));
  };

  const keyDownHandler = (e) => {
    if (disabled) return;
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      increaseButtonRef.current?.click();
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      decreaseButtonRef.current?.click();
    }
  };

  return (
    <TimeInputWrapper inlineLabel={inlineLabel}>
      {label && <TimeInputLabel disabled={disabled}>{label}</TimeInputLabel>}
      <TimeInputControl>
        <TimeInputField disabled={disabled}>
          <TimeInputValue
            disabled={disabled}
            onBlur={blurHandler}
            onChange={changeHandler('hours')}
            onFocus={() => setActiveField('hours')}
            onKeyDown={keyDownHandler}
            ref={hoursRef}
            value={hoursDisplay}
          />
          <TimeInputSeparator />
          <TimeInputValue
            disabled={disabled}
            onBlur={blurHandler}
            onChange={changeHandler('minutes')}
            onFocus={() => setActiveField('minutes')}
            onKeyDown={keyDownHandler}
            ref={minutesRef}
            value={minutesDisplay}
          />
        </TimeInputField>
        <TimeInputButtons>
          <TimeInputIncreaseButton
            disabled={disabled}
            ref={increaseButtonRef}
            onClick={buttonClickHandler('increase')}
            active={activeButton === 'increase'}
            tabIndex={-1}
          />
          <TimeInputDecreaseButton
            disabled={disabled}
            ref={decreaseButtonRef}
            onClick={buttonClickHandler('decrease')}
            active={activeButton === 'decrease'}
            tabIndex={-1}
          />
        </TimeInputButtons>
      </TimeInputControl>
    </TimeInputWrapper>
  );
};

const constrainTime = (time: Time): Time => {
  const getMinutes = () => {
    if (time.hours >= 24) {
      return 0;
    }
    if (time.hours < 0) {
      return 0;
    }
    return Math.max(0, Math.min(time.minutes, 59));
  };

  return {
    hours: Math.max(0, Math.min(time.hours, 24)),
    minutes: getMinutes(),
  };
};

const changeTime = (
  { hours, minutes }: Time,
  field: keyof Time,
  change: number
): Time => {
  if (field === 'hours') {
    const changedHours = hours + change;
    return constrainTime({
      hours: changedHours,
      minutes: minutes,
    });
  }

  if (field === 'minutes') {
    const changedMinutes = minutes + change;
    if (changedMinutes < 0) {
      if (hours === 0) {
        return {
          hours: 0,
          minutes: 0,
        };
      }

      return constrainTime({
        hours: hours - Math.ceil(-changedMinutes / 60),
        minutes: 60 + changedMinutes,
      });
    }

    if (changedMinutes >= 60) {
      return constrainTime({
        hours: hours + Math.round(changedMinutes / 60),
        minutes: changedMinutes % 60,
      });
    }

    return constrainTime({
      hours: hours,
      minutes: changedMinutes,
    });
  }
};

export default TimeInput;
