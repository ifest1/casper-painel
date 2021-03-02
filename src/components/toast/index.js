import { Container, Toast } from './styles';
import { FiXCircle } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const ToastContainer = () => {
  return (
    <Container>
      <Toast>
      <AiOutlineInfoCircle size={20}/>
      <div>
        <strong>Erro</strong>
        <p>Descricao do erro</p>
      </div>

      <button type="button">
        <FiXCircle size={18}/>
      </button>
      </Toast>
    </Container>
  )
}

export default ToastContainer;