import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 30px;
  overflow: hidden;
`;

const Toast = styled.div`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
  display: flex;

  background: white;

  > svg {
    margin: 4px 12px 0 0;
  }

  > div {
    flex: 1;
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 15px;
    background: transparent;
    border: 0;
    color: inherit;
  }
`;

export {
  Container,
  Toast
 }