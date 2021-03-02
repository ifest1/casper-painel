import styled from 'styled-components';

const Input = styled.input`
  font-family: inherit;
  width: 70%;
  border: 0;
  border-bottom: 1px solid #312e38;
  outline: 0;
  font-size: 1.1rem;
  color: #312e38;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &:focus {
    border-width: 3px;
    border-image: linear-gradient(to right, #fff, #312e38);
    border-image-slice: 1;
  }

  &:focus::placeholder {
    color: transparent;
  }
` 

export default Input;