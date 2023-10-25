import TextInput from "./TextInput";
import CharacterCount from "./CharacterCount";
import { useState } from 'react';

const CharacterCounter = () => {
  const [count, setCount] = useState('');
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
    setCount(event.target.value?.length);
  };

  return (
    <>
      <TextInput {...{text, onChange}}/>
      <CharacterCount {...{count}}/>
    </>
  );
}

export default CharacterCounter