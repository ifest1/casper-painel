import { labelStyle } from './styles';

const Label = (props) => {
  return (
    <span style={labelStyle}>
      {props.children}
    </span>
  )
}

export default Label;