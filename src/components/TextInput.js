const TextInput = ({text, onChange}) => {

  return (
    <div className='textInput'>
      <input type="text" value={text} onChange={onChange} />
      <div>Echo: {text}</div>
    </div>
  );
}

export default TextInput