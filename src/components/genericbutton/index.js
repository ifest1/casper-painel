import styled from 'styled-components';

const GenericButton = styled.button`
  background-color: #312e38;
  border: 1px solid #312e38;
  border-radius: 5px;
  color: white;
  padding: 5px;
  padding-bottom: 2px;

  &:hover {
    background-color: white;
    color: #312e38;
    border: 1px solid #312e38;
  }
`;

export default GenericButton;