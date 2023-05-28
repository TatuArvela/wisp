import { useArgs } from '@storybook/preview-api';
import { Decorator } from '@storybook/react';
import React, { useCallback, useEffect, useState } from 'react';

export const argon = (
  valueProp: ArgonParameters['valueProp'],
  onChangeProp: ArgonParameters['onChangeProp'],
  defaultValue: ArgonParameters['defaultValue'],
  mode: ArgonParameters['mode'] = 'set'
) => ({
  argon: {
    valueProp,
    onChangeProp,
    defaultValue,
    mode,
  },
});

type ArgonParameters = {
  valueProp: string;
  onChangeProp: string;
  defaultValue: unknown;
  mode: 'set' | 'toggle';
};

/**
 * Interaction decorator for input components
 */
export const ArgonDecorator: Decorator = (Story, context) => {
  const argonParameters: ArgonParameters | undefined =
    context?.parameters?.argon;
  const { valueProp, onChangeProp, defaultValue, mode } = argonParameters ?? {};

  const [args, updateArgs] = useArgs();
  const controlValue = valueProp ? args[valueProp] : undefined;
  const changeControlValue = useCallback(
    (newValue: unknown) => {
      if (valueProp) {
        return updateArgs({ [valueProp]: newValue });
      }
    },
    [updateArgs, valueProp]
  );

  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback(
    (newValue: unknown) => {
      if (mode === 'set') {
        setValue(newValue);
        changeControlValue(newValue);
      }
      if (mode === 'toggle') {
        const flippedValue = !value;
        setValue(flippedValue);
        changeControlValue(flippedValue);
      }
    },
    [changeControlValue, mode, value]
  );

  useEffect(() => {
    if (controlValue === undefined) {
      changeControlValue(value);
    }
  }, [changeControlValue, controlValue, value]);

  useEffect(() => {
    if (controlValue !== value) {
      setValue(controlValue);
    }
  }, [controlValue, value]);

  const argonArgs =
    valueProp && onChangeProp
      ? {
          ...args,
          [valueProp]: value,
          [onChangeProp]: onChange,
        }
      : args;

  return <Story args={argonArgs} />;
};

export default argon;
