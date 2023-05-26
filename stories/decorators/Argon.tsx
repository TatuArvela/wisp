import { Decorator } from '@storybook/react';
import React, { useState } from 'react';

/**
 * Interaction decorator for input components
 */
const Argon =
  (
    valueProp: string,
    onChangeProp: string,
    defaultValue: unknown,
    mode: 'set' | 'toggle' = 'set'
  ): Decorator =>
  (Story, context) => {
    const args = context.args;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(defaultValue);

    const onChange = (newValue) => {
      if (mode === 'set') {
        setValue(newValue);
      }
      if (mode === 'toggle') {
        setValue((prevValue) => !prevValue);
      }
    };

    const newArgs = {
      ...args,
      [valueProp]: value,
      [onChangeProp]: onChange,
    };

    return <Story args={newArgs} />;
  };

export default Argon;
