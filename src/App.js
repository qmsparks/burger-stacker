import React, {useState} from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import IngForm from './IngForm';

const ingredientSeed = [
  { name: '🥯 Bagel', color: 'saddlebrown' },
  { name: '🍞 Sesame Bun', color: 'sandybrown' },
  { name: '🥖 Gluten Free Bun', color: 'peru' },
  { name: '🥖 Gluten Free Bun', color: 'peru' },
  { name: '🥬 Lettuce Wrap', color: 'olivedrab' },
  { name: '🥩 Beef Patty', color: '#3F250B' },
  { name: '🍔 Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: '🍗 Chicken Patty', color: 'burlywood' },
  { name: '🥬 Lettuce', color: 'lawngreen' },
  { name: '🍅 Tomato', color: 'tomato' },
  { name: '🥓 Bacon', color: 'maroon' },
  { name: '🧅 Onion', color: 'lightyellow' },
];

function App() {
  const [ingredients, setIngredients] = useState(ingredientSeed);
  const [stack, setStack] = useState([]);

  function clear() {
    setStack([]);
  }

  function stackBurger(e) {
    const ingToAdd = ingredients.filter(ing => ing.name === e.target.innerText);

    setStack([ingToAdd[0], ...stack]);
  }

  function addIng(e) {
    e.preventDefault();
    const ingName = document.querySelector('#ingName').value;
    const ingColor = document.querySelector('#ingColor').value;

    const ing = {name: ingName, color: ingColor};

    setIngredients([ing, ...ingredients]);
  }

  function clearIng() {
    const tempStack = stack;

    tempStack.shift();
    setStack([...tempStack]);
  }

  return (
    <div className="App">
      <IngForm addIng={addIng} />
      <IngredientList ingredients={ingredients} stackBurger={stackBurger} />
      <BurgerPane stack={stack} clear={clear} clearIng={clearIng} />
    </div>
  );
}

export default App;
