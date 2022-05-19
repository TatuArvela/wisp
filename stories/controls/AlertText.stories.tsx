import { AlertText, Window, Wisp } from '../../src/index';

export default {
  component: Wisp,
  title: 'controls/AlertText',
};

export const AlertTextStory = (): JSX.Element => (
  <Wisp enableDefaultElements={false}>
    <Window id="1">
      <AlertText>AlertText</AlertText>
    </Window>
  </Wisp>
);
AlertTextStory.story = {
  name: 'AlertText',
};
