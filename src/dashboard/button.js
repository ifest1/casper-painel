import {buttonStyle} from './styles';

const Button = ({handler, id, name}) => { 
  return (
    <button 
      style={buttonStyle}
      id={id}
      onClick={handler}>
      {name}
    </button>
  )
}

export default Button;

