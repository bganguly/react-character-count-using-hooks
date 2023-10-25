import React from 'react';
import CharacterCounter from './components/CharacterCounter';
import Header2Text from './components/Header2Text';

const App =() => {
  return (
    <div className='wrapper'>
      <Header2Text/>
      <CharacterCounter />
    </div>
  );
}


export default App;
