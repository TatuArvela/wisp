import styled from 'styled-components';

type TaskbarButtonProps = {
  active: boolean;
};
const TaskbarButton = styled.button`
  box-shadow: ${(props: TaskbarButtonProps) =>
    props.active ? 'inset 0 0 0 1px gray' : 'inset -1px -1px 0 gray'};
  background: ${(props: TaskbarButtonProps) =>
    props.active ? 'white' : 'lightgray'};
  border: 1px solid black;
  font-weight: bold;
  height: 22px;
  margin-left: 2px;
  text-align: left;
  width: 160px;
  &:active {
    box-shadow: inset 0 0 0 1px gray;
    background: white;
  }
`;
TaskbarButton.defaultProps = {
  type: 'button',
};

export default TaskbarButton;
