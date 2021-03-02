import { Modal, ModalContent } from './styles';
import { FiXCircle } from 'react-icons/fi';
import IconButton from '../../components/iconbutton/index';

const Popup = (props) => {
  return (props.trigger) ? (
    <Modal>
      <ModalContent>
        <IconButton onClick={() => props.setTrigger(false)}>
          <FiXCircle size={18}/>
        </IconButton>
        {props.children}
      </ModalContent>
    </Modal>
  ) : "";
}

export default Popup;