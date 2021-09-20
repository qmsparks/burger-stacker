import React from 'react';
import Ingredient from './Ingredient';

function IngredientList(props) {
  const { ingredients, stackBurger } = props;

  const list = ingredients.map((ing, index) =>{
    return <Ingredient key={index} name={ing.name} stackBurger={stackBurger} />
  })


  return (
    <div className="ingListDiv">
      {list}
    </div>
  )
}

export default IngredientList;