import React from 'react';
import Ingredient from './Ingredient';;

function BurgerStack(props) {
  const {stack, clearIng} = props;

  const listOfIngredients = stack.map((ing, index) => {
    if (index === 0) {
      return(
        <div key={index}>
          <button onClick={clearIng}>Remove Last Ingredient</button>
          <Ingredient name={ing.name} color={ing.color} />
        </div>
      )
    }


    return <Ingredient key={index} name={ing.name} color={ing.color} />
  })

  return(
    <div>
      <p>Burger stack!</p>
      {listOfIngredients}
    </div>
  )
}

export default BurgerStack;