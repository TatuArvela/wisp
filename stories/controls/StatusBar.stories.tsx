import { StatusBar, Window, Wisp } from '../../src/index';

export default {
  component: Wisp,
  title: 'controls/StatusBar',
};

export const StatusBarStory = (): JSX.Element => (
  <Wisp enableDefaultElements={false}>
    <Window id="1">
      <StatusBar>Status bar</StatusBar>
    </Window>
  </Wisp>
);
StatusBarStory.story = {
  name: 'StatusBar',
};

export const WithResizeHandle = (): JSX.Element => (
  <Wisp enableDefaultElements={false}>
    <Window id="1">
      <StatusBar showResizeHandle>Status bar</StatusBar>
    </Window>
  </Wisp>
);
WithResizeHandle.story = {
  name: 'StatusBar with resize handle',
};
