import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.2);
  display: flex;

  justify-content: center;
  align-items: center;
`; 

const ModalContent = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  background-color: #fff;
  border-radius: 10px;

  > button {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`;

export {
  Modal, 
  ModalContent
}