import React, { useState }from 'react';
import Cocktail from './components/Cocktail';
import Menu from './components/Menu';
import DrinkIndex from './components/DrinkIndex';
import Learn from './components/Learn';
import Jokes from './components/Jokes';

function App() {

  const [toggleIndex, setToggleIndex] = useState(false); 
  const [toggleLearn, setToggleLearn] = useState(false);

  const toggleIndexButton = () => {
    setToggleIndex(!toggleIndex);
  }
  const toggleLearnButton = () => {
    setToggleLearn(!toggleLearn);
}
  return (
    <div className="App">
      <Cocktail/>
      <Menu
        toggleIndexButton={toggleIndexButton}
        toggleLearnButton={toggleLearnButton} />
      {toggleIndex && <DrinkIndex />}
      {toggleLearn && <Learn/>}
      {/* <Jokes/> */}
    </div>
  );
}

export default App;
