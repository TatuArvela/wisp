import React, { useRef, useState } from 'react';
import styled from 'styled-components';

export type Time = {
  hours: number;
  minutes: number;
};

export interface TimeInputWrapperProps {
  inlineLabel: boolean;
}
const TimeInputWrapper = styled.div<TimeInputWrapperProps>`
  ${(props) => props.theme.controls.TimeInputWrapper}
`;

const TimeInputLabel = styled.label`
  ${(props) => props.theme.controls.TimeInputLabel}
`;

const TimeInputControl = styled.div`
  ${(props) => props.theme.controls.TimeInputControl}
`;

const TimeInputField = styled.div`
  ${(props) => props.theme.controls.TimeInputField}
`;

const TimeInputValue = styled.input`
  ${(props) => props.theme.controls.TimeInputValue}
`;

const TimeInputSeparator = styled.div`
  ${(props) => props.theme.controls.TimeInputSeparator}
`;

const TimeInputButtons = styled.div`
  ${(props) => props.theme.controls.TimeInputButtons}
`;

const TimeInputDecreaseButton = styled.button<{ active?: boolean }>`
  ${(props) => props.theme.controls.TimeInputDecreaseButton}
`;

const TimeInputIncreaseButton = styled.button<{ active?: boolean }>`
  ${(props) => props.theme.controls.TimeInputIncreaseButton}
`;

interface TimeInputProps {
  inlineLabel?: boolean;
  label?: string;
  nullable?: boolean;
  onChange(value: Time): void;
  value?: Time;
}
const TimeInput = ({
  inlineLabel = false,
  label,
  onChange,
  value,
}: TimeInputProps) => {
  const [activeButton, setActiveButton] = useState<
    'increase' | 'decrease' | undefined
  >();
  const [activeButtonTimeout, setActiveButtonTimeout] =
    useState<NodeJS.Timeout>();

  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);
  const increaseButtonRef = useRef<HTMLButtonElement>(null);
  const decreaseButtonRef = useRef<HTMLButtonElement>(null);

  const hoursDisplay = value.hours.toString().padStart(2, '0');
  const minutesDisplay = value.minutes.toString().padStart(2, '0');

  const getSelected = (): keyof Time => {
    if (document.activeElement === hoursRef?.current) {
      return 'hours';
    }
    if (document.activeElement === minutesRef?.current) {
      return 'minutes';
    }
  };

  const buttonClickHandler = (button: 'increase' | 'decrease') => () => {
    onChange(changeTime(value, getSelected(), button === 'increase' ? 1 : -1));
    setActiveButton(button);
    clearTimeout(activeButtonTimeout);
    setActiveButtonTimeout(
      setTimeout(() => {
        setActiveButton(undefined);
      }, 200)
    );
  };

  const keyDownHandler = () => (e) => {
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
      {label && <TimeInputLabel>{label}</TimeInputLabel>}
      <TimeInputControl>
        <TimeInputField>
          <TimeInputValue
            ref={hoursRef}
            value={hoursDisplay}
            onKeyDown={keyDownHandler()}
          />
          <TimeInputSeparator />
          <TimeInputValue
            ref={minutesRef}
            value={minutesDisplay}
            onKeyDown={keyDownHandler()}
          />
        </TimeInputField>
        <TimeInputButtons>
          <TimeInputIncreaseButton
            ref={increaseButtonRef}
            onClick={buttonClickHandler('increase')}
            active={activeButton === 'increase'}
          />
          <TimeInputDecreaseButton
            ref={decreaseButtonRef}
            onClick={buttonClickHandler('decrease')}
            active={activeButton === 'decrease'}
          />
        </TimeInputButtons>
      </TimeInputControl>
    </TimeInputWrapper>
  );
};

const changeTime = (
  { hours, minutes }: Time,
  field: keyof Time,
  change: number
): Time => {
  const constrainTime = (time: Time): Time => ({
    hours: Math.max(0, Math.min(time.hours, 24)),
    minutes: time.hours >= 24 ? 0 : Math.max(0, Math.min(time.minutes, 59)),
  });

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
