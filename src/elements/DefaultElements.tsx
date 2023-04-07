import React from 'react';

import { useConfig } from '../ConfigContext';
import Desktop from './Desktop';
import Taskbar from './Taskbar/Taskbar';
import VersionInfo from './VersionInfo';

const DefaultElements = () => {
  const config = useConfig();

  if (!config.enableDefaultElements) {
    return null;
  }

  return (
    <>
      <Desktop>{config.enableVersionInfo && <VersionInfo />}</Desktop>
      <Taskbar />
    </>
  );
};

export default DefaultElements;
