import styled from 'styled-components';

type TaskbarButtonProps = {
  active: boolean;
};
const TaskbarButton = styled.button`
  margin: 1px;
  height: 29px;
  border: 1px solid black;
  background: ${(props: TaskbarButtonProps) =>
    props.active ? 'blue' : 'white'};
  color: ${(props: TaskbarButtonProps) => (props.active ? 'white' : 'black')};
`;
TaskbarButton.defaultProps = {
  type: 'button',
};

export default TaskbarButton;
