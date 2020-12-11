import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid black;
  background: white;
  box-shadow: 1px 1px 0 0 gray;
  font-size: 11px;
  padding: 2px;
  &:active {
    box-shadow: none;
    position: relative;
    left: 1px;
    top: 1px;
  }
`;
export default Button;
