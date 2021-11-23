import React from 'react';

import Desktop from './Desktop';
import Taskbar from './Taskbar/Taskbar';
import VersionInfo from './VersionInfo';

const DefaultElements: React.FC = () => (
  <>
    <Desktop>
      <VersionInfo />
    </Desktop>
    <Taskbar />
  </>
);

export default DefaultElements;