import styled from 'styled-components';

const GenericButton = styled.button`
  background-color: #312e38;
  border: 1px solid #312e38;
  border-radius: 5px;
  color: white;
  padding: 10px;
  margin-top: 30px;
  font-size: 12px;

  &:hover {
    background-color: white;
    color: #312e38;
    border: 1px solid #312e38;
  }
`;

export default GenericButton;