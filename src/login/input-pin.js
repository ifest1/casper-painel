const inputStyle = {
  paddingLeft: '15px',
  width: '100px',
  border: 'none',
  letterSpacing: '50px',
  padding: '20px',
  textDecoration: 'underline',
  textAlign: 'center',
  outline: 'none',
};

const InputPin = (props) => {
  const { onChange, ...otherProps } = props;
 
  return (
    <>
      <input 
      type="password"
      maxLength="4"
      onChange={onChange}
      />
    </>
  )
}

export default InputPin;