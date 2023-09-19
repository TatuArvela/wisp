import {
  makeDecorator,
  useArgs,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from '@storybook/preview-api';
import React from 'react';

type MakeDecoratorOptions = Parameters<typeof makeDecorator>[0];

type StatefulPropsParameters = {
  valueProp: string;
  onChangeProp: string;
  defaultValue: unknown;
  mode: 'set' | 'toggle';
};

/**
 * Create story parameters used by statefulPropsDecorator
 */
export const statefulProps = (
  valueProp: StatefulPropsParameters['valueProp'],
  onChangeProp: StatefulPropsParameters['onChangeProp'],
  defaultValue: StatefulPropsParameters['defaultValue'],
  mode: StatefulPropsParameters['mode'] = 'set'
) => ({
  statefulProps: {
    valueProp,
    onChangeProp,
    defaultValue,
    mode,
  },
});

const StatefulPropsWrapper: MakeDecoratorOptions['wrapper'] = (
  Story,
  context,
  { parameters }
) => {
  const { valueProp, onChangeProp, defaultValue, mode } = parameters ?? {};

  const [args, updateArgs, resetArgs] = useArgs();

  const value = useMemo(() => {
    if (valueProp) {
      return args[valueProp];
    }
    return undefined;
  }, [args, valueProp]);

  const setValue = useCallback(
    (newValue: unknown) => {
      if (valueProp) {
        resetArgs([valueProp]);
        updateArgs({ [valueProp]: newValue });
      }
    },
    [resetArgs, updateArgs, valueProp]
  );

  const onChange = useCallback(
    (newValue: unknown) => {
      if (mode === 'set') {
        setValue(newValue);
      }
      if (mode === 'toggle') {
        const flippedValue = !value;
        setValue(flippedValue);
      }
    },
    [setValue, mode, value]
  );

  const [isDefaultValueSet, setIsDefaultValueSet] = useState(false);

  useEffect(() => {
    if (value === undefined && !isDefaultValueSet) {
      if (defaultValue !== undefined) {
        setValue(defaultValue);
        setIsDefaultValueSet(true);
      }
    }
  }, [setValue, defaultValue, isDefaultValueSet, value]);

  const statefulPropsArgs =
    valueProp && onChangeProp
      ? {
          ...args,
          [valueProp]: value,
          [onChangeProp]: onChange,
        }
      : args;

  // @ts-ignore
  return <Story args={statefulPropsArgs} />;
};

/**
 * Interaction decorator for input components
 */
export const statefulPropsDecorator = makeDecorator({
  name: 'statefulProps',
  parameterName: 'statefulProps',
  skipIfNoParametersOrOptions: true,
  wrapper: StatefulPropsWrapper,
});
