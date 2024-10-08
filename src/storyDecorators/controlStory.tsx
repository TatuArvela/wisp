import { Decorator } from '@storybook/react';
import React from 'react';

import { ConfigProvider } from '../ConfigContext';
import { Desktop } from '../elements';
import ThemeManager from '../themeManager/ThemeManager';
import { WindowProvider } from '../window';
import { Window } from '../window';
import { WindowType } from '../windowManager/types';
import { Wisp } from '../Wisp';

export const buildControlStoryDecorator =
  ({ width, height }: { width?: number; height?: number }): Decorator =>
  (Story, context) => {
    const isInDocs = context.viewMode === 'docs';

    if (isInDocs) {
      return (
        <ConfigProvider>
          <ThemeManager>
            <WindowProvider value={{ height, width } as WindowType}>
              <div
                style={{
                  position: 'relative',
                  width: width ? `${width}px` : undefined,
                  height: height ? `${height}px` : undefined,
                }}
              >
                <Story />
              </div>
            </WindowProvider>
          </ThemeManager>
        </ConfigProvider>
      );
    }

    return (
      <Wisp enableVersionInfo={false} enableWindowMinimize={false}>
        <Desktop />
        <Window
          id="1"
          width={width ?? 300}
          height={height ?? 160}
          isClosable={false}
          isMaximizable={false}
        >
          <Story />
        </Window>
      </Wisp>
    );
  };

export const ControlStoryDecorator = buildControlStoryDecorator({});
