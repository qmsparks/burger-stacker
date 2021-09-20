import React from 'react';

function Ingredient(props) {
  return (
    <>
      {
        props.stackBurger ?
        <div className="ing"
      onClick={(e) => props.stackBurger(e)}
      >
        {props.name}
      </div>
      :
      <div className="ing"
      style={{backgroundColor: props.color}}
      >
        {props.name}
      </div>
      }
    </>
  )
}

export default Ingredient;